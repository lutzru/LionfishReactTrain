import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@material-ui/core'
import { ErrorConfig } from 'graphql/types'
import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import 'utils/ i18n'
import { ModifiedTheme } from 'utils/theme'
import useVersionTitle from 'utils/useVersionTitle'
import ExamplePage from './pages/ExamplePage'
import { useApolloClient } from './useApolloClient'

function App(): JSX.Element {
    useVersionTitle()
    const graphQLServerURI =
        process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_GRAPHQL_SERVER_URL + '/graphql' : '/graphql'

    const [error, setError] = React.useState<ErrorConfig>()
    const apolloClient = useApolloClient(graphQLServerURI, setError)

    return (
        <>
            {apolloClient && (
                <ApolloProvider client={apolloClient}>
                    <HashRouter>
                        <ThemeProvider theme={ModifiedTheme}>
                            {error && (
                                <div>
                                    <p>Error {error.title}</p>
                                    <p>Error {error.content}</p>
                                    {error.messages &&
                                        error.messages.map((message, index) => <p key={index}>{message}</p>)}
                                </div>
                            )}
                            {!error && (
                                <Switch>
                                    <Route exact path={'/Example'} component={ExamplePage} />
                                    <Route>
                                        <Redirect to={'/Example'} />
                                    </Route>
                                </Switch>
                            )}
                        </ThemeProvider>
                    </HashRouter>
                </ApolloProvider>
            )}
        </>
    )
}

export default App
