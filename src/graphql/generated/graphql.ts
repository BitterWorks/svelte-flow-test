import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Color = {
  __typename?: 'Color';
  fruits?: Maybe<Array<Fruit>>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type DeleteFruitInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Fruit = {
  __typename?: 'Fruit';
  amount: Scalars['Int'];
  color: Color|string;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type FruitInput = {
  amount: Scalars['Int'];
  color: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createFruit: Fruit;
  deleteFruit: Fruit;
  updateFruit: Fruit;
};


export type MutationCreateFruitArgs = {
  data: FruitInput;
};


export type MutationDeleteFruitArgs = {
  data: DeleteFruitInput;
};


export type MutationUpdateFruitArgs = {
  data: UpdateFruitInput;
};

export type Query = {
  __typename?: 'Query';
  fruits: Array<Fruit>;
};

export type UpdateFruitInput = {
  amount?: InputMaybe<Scalars['Int']>;
  color?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Unnamed_1_MutationVariables = Exact<{
  fruitName: Scalars['String'];
  color: Scalars['String'];
  amount: Scalars['Int'];
}>;


export type Unnamed_1_Mutation = { __typename?: 'Mutation', createFruit: { __typename?: 'Fruit', name: string, amount: number, color: { __typename?: 'Color', name: string } } };

export type Unnamed_2_MutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Unnamed_2_Mutation = { __typename?: 'Mutation', deleteFruit: { __typename?: 'Fruit', name: string, amount: number, id: string, color: { __typename?: 'Color', name: string } } };

export type Unnamed_3_MutationVariables = Exact<{
  fruitName?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
}>;


export type Unnamed_3_Mutation = { __typename?: 'Mutation', updateFruit: { __typename?: 'Fruit', name: string, amount: number, id: string, color: { __typename?: 'Color', name: string } } };

export const FruitsDocument = gql`
  query {
    fruits{
        name
        amount
        id
        color{
            name
        }
    }
  }
`;

export const CreateFruitDocument = gql`
    mutation ($fruitName: String!, $color: String!, $amount: Int!) {
  createFruit(data: {name: $fruitName, amount: $amount, color: $color}) {
    name
    amount
    color {
      name
    }
  }
}
    `;
export const DeleteFruitDocument = gql`
    mutation ($id: ID!) {
  deleteFruit(data: {id: $id}) {
    name
    amount
    color {
      name
    }
    id
  }
}
    `;
export const UpdateFruitDocument = gql`
    mutation ($fruitName: String, $color: String, $amount: Int, $id: ID!) {
  updateFruit(data: {name: $fruitName, amount: $amount, color: $color, id: $id}) {
    name
    amount
    color {
      name
    }
    id
  }
}
    `;

  