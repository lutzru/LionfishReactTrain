const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const { readFileSync } = require('fs')

const { ApolloServer, gql } = require('apollo-server-express')

const Anlieferungen = [
    {
        id: '123',
        date: '2021-03-02',
        status: 'OFFEN',
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
        status: 'FERTIG',
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
        status: 'IN_ARBEIT',
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
    Query: {
        anlieferungen: (parent, args, context, info) =>
            Anlieferungen.filter((anlieferung) => {
                console.log('args.status: ', args.status)
                console.log('anlieferung.status: ', anlieferung.status)
                //args.searchTerm
                return (
                    (anlieferung.artikel.name.indexOf(args.searchTerm) > -1 || !args.searchTerm) &&
                    (!args.status || args.status.includes(anlieferung.status))
                )

                //  (item.status === args.status   || !args.status )
            }),
        anlieferung: (parent, args, context, info) =>
            Anlieferungen.find((item) => {
                return item.id === args.id
            }),
        /*
        anlieferung: (parent, args, context, info) => {
            const id = args.id
        } 
        */
    },
}

const app = express()

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app })

const port = 4000

app.listen({ port }, () => {
    console.log(`server started on port ${port}`)
})
