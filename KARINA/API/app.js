const express = require('express')
const app = express()

app.get('/hello', function(req, res) {

    res.json('hello works')

})

app.listen(3000)