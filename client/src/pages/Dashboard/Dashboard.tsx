import { TableCell, TableRow } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import QualityCheckStatus from 'components/QualityCheckStatus/QualityCheckStatus'
import SearchBar from 'components/SearchBar'
import { Anlieferungen_anlieferungen } from 'graphqltypes/Anlieferungen'
import { useDashboardState } from 'pages/Dashboard/useDashboardState'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        paper: {
            width: '100%',
            marginBottom: theme.spacing(2),
        },
        table: {
            minWidth: 750,
        },
        visuallyHidden: {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            top: 20,
            width: 1,
        },
    }),
)

export default function Dashboard() {
    const classes = useStyles()

    const {
        loading,
        error,
        data,
        isOffen,
        setIsOffen,
        isFertig,
        setIsFertig,
        isInArbeit,
        setIsInArbeit,
        searchTerm,
        setSearchTerm,
    } = useDashboardState()

    // const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    //     const selectedIndex = selected.indexOf(name)
    //     let newSelected: string[] = []

    //     if (selectedIndex === -1) {
    //         newSelected = newSelected.concat(selected, name)
    //     } else if (selectedIndex === 0) {
    //         newSelected = newSelected.concat(selected.slice(1))
    //     } else if (selectedIndex === selected.length - 1) {
    //         newSelected = newSelected.concat(selected.slice(0, -1))
    //     } else if (selectedIndex > 0) {
    //         newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    //     }

    //     setSelected(newSelected)
    // }

    return (
        <Paper className={classes.paper}>
            {/* <div>{data && JSON.stringify(data)}</div> */}

            <SearchBar
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
                setIsOffen={setIsOffen}
                setIsFertig={setIsFertig}
                setIsInArbeit={setIsInArbeit}
                filterStateOffen={isOffen}
                filterStateInArbeit={isInArbeit}
                filterStateFertig={isFertig}
            />

            {loading ? (
                'nix-da'
            ) : (
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={'small'}
                        aria-label="enhanced table"
                    >
                        <TableBody>
                            {data.anlieferungen.map((anlieferung: Anlieferungen_anlieferungen, index: number) => {
                                const labelId = `enhanced-table-checkbox-${index}`

                                return (
                                    <TableRow hover tabIndex={-1} key={anlieferung.id}>
                                        <TableCell>{anlieferung.id}</TableCell>
                                        <TableCell>{anlieferung.lieferant.name}</TableCell>
                                        <TableCell>{anlieferung.artikel.name}</TableCell>
                                        <TableCell align="right">
                                            <QualityCheckStatus status={anlieferung.status} />
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Paper>
    )
}
