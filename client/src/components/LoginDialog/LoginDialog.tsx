import { Box, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import * as React from 'react'

export interface LoginDialogProps {
    userName: string
    password: string
    loginError?: string // ? - optionales Feld
    onClick: () => void
    onUserNameChange: (userName: string) => void
    onPasswordChange: (password: string) => void
}

const LoginDialog = (props: LoginDialogProps): JSX.Element => {
    return (
        <Box padding={3}>
            <Paper elevation={3}>
                <Box padding={3}>
                    <Grid container direction="column" spacing={3}>
                        <Grid item>
                            <Typography variant="h2">Login:</Typography>
                        </Grid>
                        {props.loginError && (
                            <Grid item>
                                <Alert severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    {props.loginError}
                                </Alert>
                            </Grid>
                        )}
                        <Grid item>
                            <TextField
                                id="standard-basic"
                                label="Benutzername"
                                value={props.userName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    props.onUserNameChange(e.target.value)
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="standard-basic"
                                label="Passwort"
                                type="password"
                                value={props.password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    props.onPasswordChange(e.target.value)
                                }}
                            />
                        </Grid>

                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={props.onClick}
                                disabled={!props.userName || !props.password}
                            >
                                Go
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    )
}

export default LoginDialog
