import express from 'express'
import { NODE_ENV } from './config'

export function getConfig(req: express.Request, res: express.Response): void {
    const config = {
        // example: we want to use "/graphql" when in production but a localhost with a port when in development
        API_URL: NODE_ENV === 'production' ? '/graphql' : 'http://localhost:3033/graphql',
    }

    res.setHeader('Content-Type', 'text/javascript')
    res.send('const __envConfig = ' + JSON.stringify(config))
}
