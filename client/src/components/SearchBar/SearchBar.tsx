import { Box, Checkbox, FormControlLabel, Grid, TextField } from '@material-ui/core'
import * as React from 'react'

//
// Typisierung der Props per Interface
//
export interface SearchBarProps {
    setIsOffen: (filterState: boolean) => void
    setIsInArbeit: (filterState: boolean) => void
    setIsFertig: (filterState: boolean) => void
    setSearchTerm: (searchText: string) => void

    filterStateOffen: boolean
    filterStateInArbeit: boolean
    filterStateFertig: boolean
    searchTerm: string
}

// JSX.Element - typisierung des Returnwerts der Funktion
// (props: SearchBarProps) - typisierte Props

const SearchBar = (props: SearchBarProps): JSX.Element => {
    return (
        <Box padding={3}>
            <Grid container alignItems="center" spacing={4}>
                <Grid item xs={12} sm={3}>
                    <TextField
                        id="searchtext"
                        label="Artikelbez.:"
                        value={props.searchTerm}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            props.setSearchTerm(e.target.value)
                        }}
                    />
                </Grid>

                <Grid container item xs={12} sm={9}>
                    <Grid item xs={12} sm={4}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="Offen"
                                    color="primary"
                                    checked={props.filterStateOffen}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        props.setIsOffen(!props.filterStateOffen)
                                    }}
                                />
                            }
                            label="offen"
                        />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="InArbeit"
                                    color="primary"
                                    checked={props.filterStateInArbeit}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        props.setIsInArbeit(!props.filterStateInArbeit)
                                    }}
                                />
                            }
                            label="in Arbeit"
                        />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="Fertig"
                                    color="primary"
                                    checked={props.filterStateFertig}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        props.setIsFertig(!props.filterStateFertig)
                                    }}
                                />
                            }
                            label="fertig"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SearchBar
