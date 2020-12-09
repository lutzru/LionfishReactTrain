import { Container, Grid } from '@material-ui/core'
import LoginDialog from 'components/LoginDialog'
import * as React from 'react'
import { useLoginPageState } from './useLoginPageState'

const LoginPage = (): JSX.Element => {
    //const { t } = useTranslation()

    const { fehlermeldung, onLoginClick, onPasswordChange, onUserNameChange, password, userName } = useLoginPageState()

    return (
        <Container maxWidth={'lg'}>
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
                </Grid>
            </Grid>
        </Container>
    )
}

export default LoginPage
