import { Grid, Typography } from '@material-ui/core'
import LoginDialog from 'components/LoginDialog'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from 'store/store'
import { useLoginPageState } from './useLoginPageState'

const LoginPage = (): JSX.Element => {
    //const { t } = useTranslation()

    const { fehlermeldung, onLoginClick, onPasswordChange, onUserNameChange, password, userName } = useLoginPageState()

    const { user } = useSelector((appState: AppState) => ({ user: appState.generalState.user }))

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
            </Grid>
        </Grid>
    )
}

export default LoginPage
