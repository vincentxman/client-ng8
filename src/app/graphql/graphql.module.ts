import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';

export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({ uri: '/graphql' }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [
    ApolloModule,
    HttpLinkModule
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
