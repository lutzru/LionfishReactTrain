/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ExampleInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: ExampleMutation
// ====================================================

export interface ExampleMutation_exampleMutation {
  __typename: "ExampleResponse";
  status: string;
}

export interface ExampleMutation {
  exampleMutation: ExampleMutation_exampleMutation | null;
}

export interface ExampleMutationVariables {
  input: ExampleInput;
}
