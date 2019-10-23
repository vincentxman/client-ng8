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
  & { createCat: (
    { __typename?: 'Cat' }
    & Pick<Cat, 'id' | 'name' | 'age' | 'breed'>
  ) }
);

export type GetCatsQueryVariables = {};


export type GetCatsQuery = (
  { __typename?: 'Query' }
  & { cats: Array<(
    { __typename?: 'Cat' }
    & Pick<Cat, 'id' | 'name' | 'age' | 'breed'>
  )> }
);
