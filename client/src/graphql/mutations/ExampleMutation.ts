import gql from 'graphql-tag'

export default gql`
    mutation ExampleMutation($input: ExampleInput!) {
        exampleMutation(input: $input) {
            status
        }
    }
`
