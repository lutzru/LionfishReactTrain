import { Box, Checkbox, FormControlLabel, Grid, TextField } from '@material-ui/core'
import * as React from 'react'
import { CollectionDeliveryState } from 'types'

//
// Typisierung der Props per Interface
//
export interface SearchBarProps {
    onSearchTextChanged: (searchText: string) => void
    searchText: string
    onFilterToggle: (filterState: CollectionDeliveryState) => void
    filterStateOffen: boolean
    filterStateInArbeit: boolean
    filterStateFertig: boolean
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
                        label="Artikelnr.:"
                        value={props.searchText}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            props.onSearchTextChanged(e.target.value)
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
                                        props.onFilterToggle(CollectionDeliveryState.OFFEN)
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
                                        props.onFilterToggle(CollectionDeliveryState.IN_ARBEIT)
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
                                        props.onFilterToggle(CollectionDeliveryState.FERTIG)
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
