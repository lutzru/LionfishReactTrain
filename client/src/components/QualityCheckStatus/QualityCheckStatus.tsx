import { Box, makeStyles, Typography } from '@material-ui/core'
import * as React from 'react'

export enum QualityCheckStatusType {
    OPEN,
    IN_PROGRESS,
    FINISHED,
    BLOCKED,
}

export interface QualityCheckStatusProps {
    status: QualityCheckStatusType
}

const useStyles = makeStyles({
    colorBox: {
        marginLeft: '20px',
        boxSizing: 'border-box',
        width: '80px',
        height: '34px',
        background: '#EFEFEF',
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusOpen: {
        boxShadow: '-8px 0 #28B446',
    },
    statusInProgress: {
        boxShadow: '-8px 0 #FFD037',
    },
    statusFinished: {
        boxShadow: '-8px 0 #9E9E9E',
    },
    statusBlocked: {
        boxShadow: '-8px 0 #9E1E1E',
    },
})

const QualityCheckStatus = (props: QualityCheckStatusProps): JSX.Element => {
    const classes = useStyles()
    let styleClass = classes.statusInProgress
    let statusLabel = 'in arbeit'
    if (props.status === QualityCheckStatusType.OPEN) {
        styleClass = classes.statusOpen
        statusLabel = 'offen'
    } else if (props.status === QualityCheckStatusType.FINISHED) {
        styleClass = classes.statusFinished
        statusLabel = 'fertig'
    } else if (props.status === QualityCheckStatusType.BLOCKED) {
        styleClass = classes.statusBlocked
        statusLabel = 'geblockt'
    }

    return (
        <Box className={`${classes.colorBox} ${styleClass}`}>
            <Typography>{statusLabel}</Typography>
        </Box>
    )
}

export default QualityCheckStatus

/*
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2 6H0V11H0.01L0 20C0 21.1 0.9 22 2 22H20V20H2V6ZM22 4H14L12 2H6C4.9 2 4.01 2.9 4.01 4L4 16C4 17.1 4.9 18 6 18H22C23.1 18 24 17.1 24 16V6C24 4.9 23.1 4 22 4ZM7 15L11.5 9L15 13.51L17.5 10.5L21 15H7Z"
                    fill={props.status === QualityCheckStatusType.FINISHED ? '#9E9E9E' : '#666'}
                    fill-opacity="0.87"
                />
            </svg>

*/
