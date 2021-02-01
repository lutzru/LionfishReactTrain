const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const { readFileSync } = require('fs')

const Anlieferungen = [
    {
        id: '123',
        date: '2021-03-02',
        lieferant: {
            id: '678',
            lieferantenNummer: '456',
            name: 'Musterfirma GmbH',
        },
        artikel: {
            id: '1234',
            articleNumber: '789',
            name: 'ein Artikel :)',
        },
    },
    {
        id: '124',
        date: '2021-03-02',
        lieferant: {
            id: '678',
            lieferantenNummer: '456',
            name: 'Musterfirma 2 GmbH',
        },
        artikel: {
            id: '1236',
            articleNumber: '589',
            name: 'noch ein Artikel',
        },
    },
    {
        id: '125',
        date: '2021-03-02',
        lieferant: {
            id: '678',
            lieferantenNummer: '456',
            name: 'Musterfirma 3 GmbH',
        },
        artikel: {
            id: '1235',
            articleNumber: '777',
            name: 'Pizza mit Pommes',
        },
    },
]

// The GraphQL schema in string form
const typeDefs = readFileSync('../graphql/schema.graphqls', 'utf-8')

// The resolvers
const resolvers = {
    Query: { anlieferungen: () => Anlieferungen },
}

// Put together a schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

// Initialize the app
const app = express()

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

// Start the server
app.listen(3000, () => {
    console.log('Go to http://localhost:3000/graphiql to run queries!')
})
