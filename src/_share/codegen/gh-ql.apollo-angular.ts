import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};



export type Cat = {
  __typename?: 'Cat',
  id: Scalars['ID'],
  name: Scalars['String'],
  age: Scalars['Int'],
  breed?: Maybe<Scalars['String']>,
};

export type CatDto = {
  name: Scalars['String'],
  age: Scalars['Int'],
  breed?: Maybe<Scalars['String']>,
};

export type Mutation = {
  __typename?: 'Mutation',
  createCat: Cat,
  updateCat: Cat,
  deleteCat: Cat,
};


export type MutationCreateCatArgs = {
  catDto: CatDto
};


export type MutationUpdateCatArgs = {
  catDto: CatDto,
  id: Scalars['String']
};


export type MutationDeleteCatArgs = {
  id: Scalars['String']
};

export type Query = {
  __typename?: 'Query',
  hello: Scalars['String'],
  cats: Array<Cat>,
  cat: Cat,
};


export type QueryCatArgs = {
  id: Scalars['String']
};

export type Subscription = {
  __typename?: 'Subscription',
  catAdded: Cat,
};

export type CreateCatMutationVariables = {};


export type CreateCatMutation = (
  { __typename?: 'Mutation' }
  & {
    createCat: (
      { __typename?: 'Cat' }
      & Pick<Cat, 'id' | 'name' | 'age' | 'breed'>
    )
  }
);

export type DeleteCatMutationVariables = {};


export type DeleteCatMutation = (
  { __typename?: 'Mutation' }
  & {
    deleteCat: (
      { __typename?: 'Cat' }
      & Pick<Cat, 'id' | 'name' | 'age'>
    )
  }
);

export type GetCatQueryVariables = {};


export type GetCatQuery = (
  { __typename?: 'Query' }
  & {
    cat: (
      { __typename?: 'Cat' }
      & Pick<Cat, 'id' | 'name' | 'age' | 'breed'>
    )
  }
);

export type GetCatsQueryVariables = {};


export type GetCatsQuery = (
  { __typename?: 'Query' }
  & {
    cats: Array<(
      { __typename?: 'Cat' }
      & Pick<Cat, 'id' | 'name' | 'age' | 'breed'>
    )>
  }
);

export type UpdateCatMutationVariables = {};


export type UpdateCatMutation = (
  { __typename?: 'Mutation' }
  & {
    updateCat: (
      { __typename?: 'Cat' }
      & Pick<Cat, 'id' | 'name' | 'age' | 'breed'>
    )
  }
);


export const CreateCatDocument = gql`
    mutation createCat {
  createCat(catDto: {name: "cat3", age: 27, breed: "whitedog"}) {
    id
    name
    age
    breed
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class CreateCatGQL extends Apollo.Mutation<CreateCatMutation, CreateCatMutationVariables> {
  document = CreateCatDocument;

}
export const DeleteCatDocument = gql`
    mutation deleteCat {
  deleteCat(id: "5da9ea5dd78cac2298dcdcb0") {
    id
    name
    age
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class DeleteCatGQL extends Apollo.Mutation<DeleteCatMutation, DeleteCatMutationVariables> {
  document = DeleteCatDocument;

}
export const GetCatDocument = gql`
    query getCat {
  cat(id: "5da9f717ad271613e015d73e") {
    id
    name
    age
    breed
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class GetCatGQL extends Apollo.Query<GetCatQuery, GetCatQueryVariables> {
  document = GetCatDocument;

}
export const GetCatsDocument = gql`
    query getCats {
  cats {
    id
    name
    age
    breed
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class GetCatsGQL extends Apollo.Query<GetCatsQuery, GetCatsQueryVariables> {
  document = GetCatsDocument;

}
export const UpdateCatDocument = gql`
    mutation updateCat {
  updateCat(id: "5da9ea5dd78cac2298dcdcb0", catDto: {name: "cat3", age: 3353, breed: "whitedog"}) {
    id
    name
    age
    breed
  }
}
    `;

@Injectable({
  providedIn: 'root'
})
export class UpdateCatGQL extends Apollo.Mutation<UpdateCatMutation, UpdateCatMutationVariables> {
  document = UpdateCatDocument;

}
