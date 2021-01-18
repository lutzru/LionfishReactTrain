import Paper from '@material-ui/core/Paper'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import QualityCheckStatus, { QualityCheckStatusType } from 'components/QualityCheckStatus/QualityCheckStatus'
import SearchBar from 'components/SearchBar'
import React from 'react'
import { CollectionDeliveryState } from 'types'

interface Data {
    article: string
    supplier: string
    date: string
    status: QualityCheckStatusType
}

function createData(article: string, supplier: string, date: string, status: QualityCheckStatusType): Data {
    return { article, supplier, date, status }
}

const rows = [
    createData('Artikel 1', 'Lieferant A', '12.12.2021', QualityCheckStatusType.OPEN),
    createData('Artikel 21', 'Lieferant B', '12.12.2021', QualityCheckStatusType.OPEN),
    createData('Artikel 3', 'Lieferant C', '12.12.2021', QualityCheckStatusType.IN_PROGRESS),
    createData('Artikel 4', 'Lieferant D', '12.12.2021', QualityCheckStatusType.FINISHED),
    createData('Artikel 5', 'Lieferant E', '12.12.2021', QualityCheckStatusType.FINISHED),
    createData('Artikel 6', 'Lieferant F', '12.12.2021', QualityCheckStatusType.FINISHED),
]

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

export default function EnhancedTable() {
    const classes = useStyles()

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
            <SearchBar
                onSearchTextChanged={(searchText: string) => {}}
                searchText={'test'}
                onFilterToggle={(filterState: CollectionDeliveryState) => {}}
                filterStateOffen={false}
                filterStateInArbeit={false}
                filterStateFertig={false}
            />
            <TableContainer>
                <Table
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    size={'small'}
                    aria-label="enhanced table"
                >
                    <TableBody>
                        {rows.map((row, index) => {
                            const labelId = `enhanced-table-checkbox-${index}`

                            return (
                                <TableRow hover tabIndex={-1} key={row.article}>
                                    <TableCell>{row.article}</TableCell>
                                    <TableCell>{row.supplier}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell align="right">
                                        <QualityCheckStatus status={row.status} />
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}
