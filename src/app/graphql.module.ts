import { NgModule } from '@angular/core';

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities/lib/getFromAST';
import { OperationDefinitionNode } from 'graphql/language/ast';
import * as os from 'os';
import { dump } from 'src/_share/utilities/tools';
import { environment } from 'src/environments/environment';

export function createApollo(httpLink: HttpLink) {
  const uri = environment.production ?
    'wss://www.audioprint.cn/graphql?subscription=1' :
    'ws://localhost:8000/graphql?subscription=1';
  const ws = new WebSocketLink({
    uri,
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    }
  });

  const http = httpLink.create({ uri: '/graphql' });

  const link = split(
    // split based on operation type
    ({ query }) => {
      const op = getMainDefinition(query);
      const { kind, operation } = op as any as OperationDefinitionNode;
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    ws,
    http,
  );
  return {
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [
    ApolloModule,
    HttpLinkModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    }
  ],
})
export class GraphqlModule {
}
