import path from 'path'
import winston, { format } from 'winston'
import { LOGS_DIR } from './config'

// format for outputting to the console
const forConsole = format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf((info) => `[${info.level}] ${info.timestamp} - ${info.message} `),
)

// format for outputting to the logfiles
const forLogfile = format.combine(
    format.timestamp(),
    format.printf((info) => `[${info.level.toUpperCase()}] ${info.timestamp} - ${info.message} `),
)

const logger = winston.createLogger({
    level: 'info',
    format: forLogfile,
    transports: [
        new winston.transports.File({ filename: path.join(LOGS_DIR, 'error.log'), level: 'error' }),
        new winston.transports.File({ filename: path.join(LOGS_DIR, 'combined.log') }),
    ],
})

// if not on production also log to console
if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new winston.transports.Console({
            format: forConsole,
        }),
    )
}

export default logger
