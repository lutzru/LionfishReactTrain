import express from 'express'
import { getConfig } from './util/getConfig'
import logger from './util/logger'

const app = express()
const port = 3000

// All files in the "public" directory will be statically delivered
app.use(express.static('public'))

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, awesome world' })
    logger.info('/api/hello called')
})

// Create an endpoint where a react application can request a config that contains API urls etc. that depend on the environment
app.get('/config.js', getConfig)

// Start the server
app.listen(port, () => {
    logger.info(`server is listening on ${port}`)

    return true
})
