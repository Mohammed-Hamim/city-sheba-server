const express = require('express')
const cors = require('cors');
const app = express()
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000


// middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('CitySheba server is  running ')
})

app.listen(port, () => {
    console.log(`CitySheba listening on port ${port}`)
})