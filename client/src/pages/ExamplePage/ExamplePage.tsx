import { Container, Grid, Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import TestIDs from 'utils/TestIDs'
import { useExamplePageState } from './useExamplePageState'

const TestPage = (): JSX.Element => {
    const { currentValue, setCurrentValue, loadValue, saveValue } = useExamplePageState()
    const { t } = useTranslation()

    return (
        <Container maxWidth={'lg'}>
            <Paper elevation={5}>
                <Grid container justify={'center'} spacing={2}>
                    <Grid item xs={12}>
                        <Typography className={'ExampleText'} {...TestIDs.GET_EXAMPLE('EXAMPLE_TEXT')}>
                            {t('exampleProject')}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default TestPage
