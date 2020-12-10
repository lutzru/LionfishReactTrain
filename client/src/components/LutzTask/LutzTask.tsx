import { Box, Grid, TextField } from '@material-ui/core'
import * as React from 'react'

export interface LutzTaskProps {
    onTaskDateChanged: (searchText: string) => void
    taskDate: string
}

const LutzTask = (props: LutzTaskProps): JSX.Element => {
    return (
        <Box padding={3}>
            <Grid container alignItems="center" spacing={4}>
                <Grid item>
                    <TextField
                        id="taskDate"
                        label="Datum:"
                        value={props.taskDate}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            props.onTaskDateChanged(e.target.value)
                        }}
                    />
                </Grid>
                <Grid item>Prio:</Grid>
                <Grid item>Text:</Grid>
                <Grid item>Status:</Grid>
            </Grid>
        </Box>
    )
}

export default LutzTask
