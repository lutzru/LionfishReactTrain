import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import TestIDs from 'utils/TestIDs'

export interface ExampleQueryComponentProps {
    saveCount: () => void
    loadLastSavedCount: () => void
}

const ExampleQueryComponent = (props: ExampleQueryComponentProps): JSX.Element => {
    const { loadLastSavedCount, saveCount } = props
    const { t } = useTranslation()

    return (
        <Grid item container xs={12} spacing={3}>
            <Grid item xs={12} sm>
                <Button
                    {...TestIDs.GET_EXAMPLE('EXAMPLE_SAVE')}
                    onClick={saveCount}
                    fullWidth
                    variant={'outlined'}
                    color={'primary'}
                >
                    <Typography className={'ExampleText'}>{t('save')}</Typography>
                </Button>
            </Grid>
            <Grid item xs={12} sm>
                <Button
                    {...TestIDs.GET_EXAMPLE('EXAMPLE_LOAD')}
                    onClick={loadLastSavedCount}
                    fullWidth
                    variant={'outlined'}
                    color={'primary'}
                >
                    <Typography className={'ExampleText'}>{t('load')}</Typography>
                </Button>
            </Grid>
        </Grid>
    )
}

export default ExampleQueryComponent
