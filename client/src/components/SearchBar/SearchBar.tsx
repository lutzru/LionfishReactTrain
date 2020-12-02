import { Box, Checkbox, FormControlLabel, Grid, TextField } from '@material-ui/core'
import * as React from 'react'

//
// Typisierung der Props per Interface
//
export interface SearchBarProps {
    onClick: () => void
}

// JSX.Element - typisierung des Returnwerts der Funktion
// (props: SearchBarProps) - typisierte Props

const SearchBar = (props: SearchBarProps): JSX.Element => {
    const { onClick } = props

    //return <Typography onClick={onClick}>Lutz ist hier</Typography>

    return (
        <Box padding={3}>
            <Grid container alignItems="center" spacing={4}>
                <Grid item xs={12} sm={3}>
                    <TextField id="searchtext" label="Artikelnr.:" />
                </Grid>

                <Grid container item xs={12} sm={9}>
                    <Grid item xs={12} sm={4}>
                        <FormControlLabel control={<Checkbox name="checkedB" color="primary" />} label="offen" />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <FormControlLabel control={<Checkbox name="checkedB" color="primary" />} label="in Arbeit" />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <FormControlLabel control={<Checkbox name="checkedB" color="primary" />} label="fertig" />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SearchBar
