// import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@material-ui/core'
import ExamplePage from 'pages/ExamplePage'
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
    // const graphQLServerURI =
    // process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_GRAPHQL_SERVER_URL + '/graphql' : '/graphql'

    // const [error, setError] = React.useState<ErrorConfig>()
    // const apolloClient = useApolloClient(graphQLServerURI, setError)

    return (
        <HashRouter>
            <Provider store={store}>
                <ThemeProvider theme={ModifiedTheme}>
                    <Switch>
                        <Route exact path={'/Example'} component={ExamplePage} />
                        <Route exact path={'/Login'} component={LoginPage} />
                        <Route>
                            <Redirect to={'/Login'} />
                        </Route>
                    </Switch>
                </ThemeProvider>
            </Provider>
        </HashRouter>
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
