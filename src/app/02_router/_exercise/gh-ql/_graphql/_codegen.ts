import gql from "graphql-tag";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";
export type Maybe<T> = T | null;
// Generated in 2019-10-30T21:49:27+08:00

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cat = {
  __typename?: "Cat";
  id: Scalars["ID"];
  name: Scalars["String"];
  age: Scalars["Int"];
  breed?: Maybe<Scalars["String"]>;
};

export type CatDto = {
  name: Scalars["String"];
  age: Scalars["Int"];
  breed?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createCat: Cat;
  updateCat: Cat;
  deleteCat: Cat;
};

export type MutationCreateCatArgs = {
  catDto: CatDto;
};

export type MutationUpdateCatArgs = {
  catDto: CatDto;
  id: Scalars["String"];
};

export type MutationDeleteCatArgs = {
  id: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  hello: Scalars["String"];
  cats: Array<Cat>;
  cat: Cat;
};

export type QueryCatsArgs = {
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryCatArgs = {
  id: Scalars["String"];
};

export type Subscription = {
  __typename?: "Subscription";
  catAdded: Cat;
  catUpdated: Cat;
  catDeleted: Cat;
};

export type CatAddedSubscriptionVariables = {};

export type CatAddedSubscription = { __typename?: "Subscription" } & {
  catAdded: { __typename?: "Cat" } & Pick<Cat, "id" | "name" | "age" | "breed">;
};

export type CreateCatMutationVariables = {
  name: Scalars["String"];
  age: Scalars["Int"];
  breed?: Maybe<Scalars["String"]>;
};

export type CreateCatMutation = { __typename?: "Mutation" } & {
  createCat: { __typename?: "Cat" } & Pick<
    Cat,
    "id" | "name" | "age" | "breed"
  >;
};

export type CreateCat2MutationVariables = {
  catDt: CatDto;
};

export type CreateCat2Mutation = { __typename?: "Mutation" } & {
  createCat: { __typename?: "Cat" } & Pick<
    Cat,
    "id" | "name" | "age" | "breed"
  >;
};

export type DeleteCatMutationVariables = {
  id: Scalars["String"];
};

export type DeleteCatMutation = { __typename?: "Mutation" } & {
  deleteCat: { __typename?: "Cat" } & Pick<Cat, "id" | "name" | "age">;
};

export type GetCatQueryVariables = {
  id: Scalars["String"];
};

export type GetCatQuery = { __typename?: "Query" } & {
  cat: { __typename?: "Cat" } & Pick<Cat, "id" | "name" | "age" | "breed">;
};

export type GetCatsQueryVariables = {
  limit: Scalars["Int"];
};

export type GetCatsQuery = { __typename?: "Query" } & {
  cats: Array<
    { __typename?: "Cat" } & Pick<Cat, "id" | "name" | "age" | "breed">
  >;
};

export type UpdateCatMutationVariables = {
  id: Scalars["String"];
  cat: CatDto;
};

export type UpdateCatMutation = { __typename?: "Mutation" } & {
  updateCat: { __typename?: "Cat" } & Pick<
    Cat,
    "id" | "name" | "age" | "breed"
  >;
};

export const CatAddedDocument = gql`
  subscription catAdded {
    catAdded {
      id
      name
      age
      breed
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CatAddedGQL extends Apollo.Subscription<
  CatAddedSubscription,
  CatAddedSubscriptionVariables
> {
  document = CatAddedDocument;
}
export const CreateCatDocument = gql`
  mutation createCat($name: String!, $age: Int!, $breed: String) {
    createCat(catDto: { name: $name, age: $age, breed: $breed }) {
      id
      name
      age
      breed
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateCatGQL extends Apollo.Mutation<
  CreateCatMutation,
  CreateCatMutationVariables
> {
  document = CreateCatDocument;
}
export const CreateCat2Document = gql`
  mutation createCat2($catDt: CatDto!) {
    createCat(catDto: $catDt) {
      id
      name
      age
      breed
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class CreateCat2GQL extends Apollo.Mutation<
  CreateCat2Mutation,
  CreateCat2MutationVariables
> {
  document = CreateCat2Document;
}
export const DeleteCatDocument = gql`
  mutation deleteCat($id: String!) {
    deleteCat(id: $id) {
      id
      name
      age
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class DeleteCatGQL extends Apollo.Mutation<
  DeleteCatMutation,
  DeleteCatMutationVariables
> {
  document = DeleteCatDocument;
}
export const GetCatDocument = gql`
  query getCat($id: String!) {
    cat(id: $id) {
      id
      name
      age
      breed
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetCatGQL extends Apollo.Query<GetCatQuery, GetCatQueryVariables> {
  document = GetCatDocument;
}
export const GetCatsDocument = gql`
  query getCats($limit: Int!) {
    cats(limit: $limit) {
      id
      name
      age
      breed
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class GetCatsGQL extends Apollo.Query<
  GetCatsQuery,
  GetCatsQueryVariables
> {
  document = GetCatsDocument;
}
export const UpdateCatDocument = gql`
  mutation updateCat($id: String!, $cat: CatDto!) {
    updateCat(id: $id, catDto: $cat) {
      id
      name
      age
      breed
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class UpdateCatGQL extends Apollo.Mutation<
  UpdateCatMutation,
  UpdateCatMutationVariables
> {
  document = UpdateCatDocument;
}
