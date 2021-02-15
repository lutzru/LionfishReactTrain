import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Container, ThemeProvider } from '@material-ui/core'
import Dashboard from 'pages/Dashboard'
import LoginPage from 'pages/LoginPage'
import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import store from 'store/store'
import 'utils/ i18n'
import { ModifiedTheme } from 'utils/theme'
import useVersionTitle from 'utils/useVersionTitle'

function App(): JSX.Element {
    useVersionTitle()
    const graphQLServerURI = 'http://localhost:4000/graphql'
    // process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_GRAPHQL_SERVER_URL + '/graphql' : '/graphql'

    const client = new ApolloClient({
        uri: graphQLServerURI,
        cache: new InMemoryCache(),
    })

    return (
        <ApolloProvider client={client}>
            <HashRouter>
                <Provider store={store}>
                    <ThemeProvider theme={ModifiedTheme}>
                        <Container maxWidth={'lg'}>
                            <Switch>
                                <Route exact path={'/Dashboard'} component={Dashboard} />
                                <Route exact path={'/Login'} component={LoginPage} />
                                <Route>
                                    <Redirect to={'/Login'} />
                                </Route>
                            </Switch>
                        </Container>
                    </ThemeProvider>
                </Provider>
            </HashRouter>
        </ApolloProvider>
    )
}

// <>
//     {apolloClient && (
//         // <ApolloProvider client={apolloClient}>
//             <HashRouter>
//                 <ThemeProvider theme={ModifiedTheme}>
//                     {/* {error && (
//                         <div>
//                             <p>Error {error.title}</p>
//                             <p>Error {error.content}</p>
//                             {error.messages &&
//                                 error.messages.map((message, index) => <p key={index}>{message}</p>)}
//                         </div>
//                     )} */}
//                     {!error && (
//                         <Switch>
//                             <Route exact path={'/Example'} component={ExamplePage} />
//                             <Route>
//                                 <Redirect to={'/Example'} />
//                             </Route>
//                         </Switch>
//                     )}
//                 </ThemeProvider>
//             </HashRouter>
//         // </ApolloProvider>
//     )}
// </>

export default App
