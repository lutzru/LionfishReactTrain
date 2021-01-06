import express from 'express'
import { getConfig } from './util/getConfig'
import logger from './util/logger'

const app = express()
const port = 3000

// All files in the "public" directory will be statically delivered
app.use(express.static('public'))

// Hier, Json parsen, global verfügbar
app.use(express.json())

// http://localhost:3000/api/hello2/DerLutz
app.get('/api/hello2/:user', (req, res) => {
    let u = req.params.user;
    console.log(req)
    res.json({ message: `Hello ${u} awesome world` })
    logger.info('/api/hello called')
})

// http://localhost:3000/api/hello?user=DerLutz
app.get('/api/hello', (req, res) => {
    let u = req.query.user;
    console.log(req)
    res.json({ message: `Hello ${u} awesome world` })
    logger.info('/api/hello called')
})

// BodyParser, JSON zerlegen
app.post('/api/login', (req, res) => {


    let u = req.body.username
    let p = req.body.password

    console.log(req)
    
    res.json({ message: `Logindata: ${u} ${p} awesome world` })
    logger.info('/api/hello called')
})

// Create an endpoint where a react application can request a config that contains API urls etc. that depend on the environment
app.get('/config.js', getConfig)

console.log(process.env)

// Start the server
app.listen(port, () => {
    logger.info(`server is listening on ${port}`)

    return true
})
