import type { OperationStore } from '@urql/svelte';
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
  id: Scalars['ID'];
  name: Scalars['String'];
  fruits?: Maybe<Array<Fruit>>;
};

export type DeleteFruitInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Fruit = {
  __typename?: 'Fruit';
  id: Scalars['ID'];
  name: Scalars['String'];
  color: Color;
  amount: Scalars['Int'];
};

export type FruitInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  color: Scalars['String'];
  amount: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createFruit: Fruit;
  updateFruit: Fruit;
  deleteFruit: Fruit;
};


export type MutationCreateFruitArgs = {
  data: FruitInput;
};


export type MutationUpdateFruitArgs = {
  data: UpdateFruitInput;
};


export type MutationDeleteFruitArgs = {
  data: DeleteFruitInput;
};

export type Query = {
  __typename?: 'Query';
  fruits: Array<Fruit>;
};

export type UpdateFruitInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['Int']>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { __typename?: 'Query', fruits: Array<{ __typename?: 'Fruit', name: string, amount: number, id: string, color: { __typename?: 'Color', name: string } }> };


export const Document = gql`
    {
  fruits {
    name
    amount
    id
    color {
      name
    }
  }
}
    `;