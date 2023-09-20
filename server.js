const express = require('express')
const dotenv = require('dotenv')
const db = require('./config/db/index')
const initRoute = require('./routes/initRoute')
dotenv.config()

const port = process.env.PORT || 8080

const app = express()
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
db.connect()
initRoute(app)



app.listen(port, ()=> {console.log(`http://localhost:${port}`)})