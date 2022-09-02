const express = require('express');
const { registerUser } = require('./controller/userController');
const app = express()
const path = require('path');
const { viewPlan } = require('./controller/viewplan');
require('dotenv').config({ path: path.resolve(__dirname, '../config.env') })

app.use(express.json())

app.get('/', function(req, res) {
    return res.status(200).json({"data" : "welcome to the server"})
})

app.post('/register', registerUser )
app.get('/getDetails', viewPlan)

const PORT = process.env.PORT 
app.listen(PORT, () => console.log(`server is running on ${PORT}`))


