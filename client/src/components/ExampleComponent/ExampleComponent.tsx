import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import TestIDs from 'utils/TestIDs'

export interface ExampleComponentProps {
    currentValue: number
    decreaseValue: () => void
    increaseValue: () => void
}

const ExampleComponent = (props: ExampleComponentProps): JSX.Element => {
    const { currentValue, decreaseValue, increaseValue } = props

    return (
        <Grid item container xs={12} spacing={3}>
            <Grid item xs={12}>
                <Typography {...TestIDs.GET_EXAMPLE('EXAMPLE_COUNTER')} className={'ExampleText'} color={'primary'}>
                    {currentValue}
                </Typography>
            </Grid>
            <Grid item xs={12} sm>
                <Button
                    {...TestIDs.GET_EXAMPLE('EXAMPLE_MINUS')}
                    onClick={decreaseValue}
                    fullWidth
                    variant={'outlined'}
                    color={'primary'}
                >
                    <Typography className={'ExampleText'}>-</Typography>
                </Button>
            </Grid>
            <Grid item xs={12} sm>
                <Button
                    {...TestIDs.GET_EXAMPLE('EXAMPLE_PLUS')}
                    onClick={increaseValue}
                    fullWidth
                    variant={'outlined'}
                    color={'primary'}
                >
                    <Typography className={'ExampleText'}>+</Typography>
                </Button>
            </Grid>
        </Grid>
    )
}

export default ExampleComponent
