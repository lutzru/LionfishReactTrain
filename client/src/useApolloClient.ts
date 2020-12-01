import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { GraphQLError } from 'graphql/error/GraphQLError'
import { ErrorConfig } from 'graphql/types'
import * as React from 'react'
import { useTranslation } from 'react-i18next'

export const useApolloClient = (
    graphQLServerURI: string,
    setError: (error: ErrorConfig) => void,
): ApolloClient<unknown> | undefined => {
    const [apolloClient, setApolloClient] = React.useState<ApolloClient<unknown>>()
    const { t } = useTranslation()

    const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
            let auxErr: string[] = []
            auxErr = graphQLErrors.map((graphQLError: GraphQLError): string => {
                return graphQLError.extensions && graphQLError.extensions.code
                    ? t('error.' + graphQLError.extensions.code)
                    : graphQLError.message
            })
            setError({
                title: t('graphQLErrorTitle'),
                content: t('graphQLErrorContent') + ':',
                messages: auxErr,
            })
        } else if (networkError) {
            setError({
                title: t('networkErrorTitle'),
                content: t('networkErrorContent'),
            })
        }
    })

    const httpLink = new HttpLink({ uri: graphQLServerURI })

    const link = ApolloLink.from([errorLink, httpLink])

    React.useEffect(
        () => {
            setApolloClient(
                new ApolloClient({
                    cache: new InMemoryCache(),
                    link: link,
                }),
            )
        },
        // eslint-disable-next-line
        [],
    )

    return apolloClient
}
