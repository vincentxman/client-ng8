import { NgModule } from '@angular/core';

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// import {} from 'subscriptions-transport-ws';
// import { WebSocketLink } from 'apollo-link-ws';

export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({ uri: '/graphql' }),
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
