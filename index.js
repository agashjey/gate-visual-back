const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
const cors = require('cors')
app.use(cors())

const port = process.env.PORT || 5000
const router = require('./routes/index.routes') 

app.get("/", (req, res) => {
    res.json("hi")
})

app.use('/api', router)

mongoose.connect(process.env.MONGO_URI)

app.listen(port, () => console.log("server on port 5000"))