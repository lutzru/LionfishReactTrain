import { useQuery } from '@apollo/client'
import { Grid, Typography } from '@material-ui/core'
import LoginDialog from 'components/LoginDialog'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from 'store/store'
import Anlieferungen from '../../graphql/queries/Anlieferungen'
import { useLoginPageState } from './useLoginPageState'

const LoginPage = (): JSX.Element => {
    //const { t } = useTranslation()

    const { fehlermeldung, onLoginClick, onPasswordChange, onUserNameChange, password, userName } = useLoginPageState()

    const { user } = useSelector((appState: AppState) => ({ user: appState.generalState.user }))

    const { loading, error, data } = useQuery(Anlieferungen, {
        variables: { status: ['FERTIG'] },
    })

    return (
        <Grid container justify={'center'} spacing={2}>
            <Grid item xs={12}>
                <LoginDialog
                    userName={userName}
                    onUserNameChange={onUserNameChange}
                    password={password}
                    onPasswordChange={onPasswordChange}
                    onClick={onLoginClick}
                    loginError={fehlermeldung}
                />
                <Typography variant="h1">user: {user}</Typography>
                <div>{data && JSON.stringify(data)}</div>
            </Grid>
        </Grid>
    )
}

export default LoginPage
