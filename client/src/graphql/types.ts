export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
}

export type Example = {
    __typename?: 'Example'
    string?: Maybe<Scalars['String']>
    int?: Maybe<Scalars['Int']>
    float?: Maybe<Scalars['Float']>
    boolean?: Maybe<Scalars['Boolean']>
    id?: Maybe<Scalars['ID']>
    stringArray: Array<Scalars['String']>
}

export type ErrorConfig = {
    __typename?: 'ErrorConfig'
    title: Scalars['String']
    content: Scalars['String']
    messages?: Maybe<Array<Scalars['String']>>
}

export enum EnumExample {
    ONE = 'ONE',
    TWO = 'TWO',
}

export type ExampleInput = {
    value: Scalars['Int']
}

export type ExampleResponse = {
    __typename?: 'ExampleResponse'
    status: Scalars['String']
}

export type Query = {
    __typename?: 'Query'
    exampleQuery: Scalars['Int']
}

export type Mutation = {
    __typename?: 'Mutation'
    exampleMutation?: Maybe<ExampleResponse>
}

export type MutationExampleMutationArgs = {
    input: ExampleInput
}
