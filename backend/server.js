const express = require('express')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5000

const baseurl = process.env.BASE_URL

const app = express()

app.use(`${baseurl}/check`, require('./routes/test.router'))

app.listen(port, ()=>{console.log(`server start on port ${port} base url `)})
