const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const https = require('https');
const loginRouter = require('./routes/login.js')

app.use(cors());
app.use(bodyParser.json());


app.get('/hello', function (req, res) {

    res.json('hello works')

});

app.use('/login', loginRouter);

app.listen(3000);