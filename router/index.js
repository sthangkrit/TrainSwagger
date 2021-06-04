const express = require('express')
const app = express()
const request = require('../controller/handle');

app.post('/Login', (req, res) => {
    try {
        var result = new request().login(req.body)
        res.send(result)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
})

app.post('/Transaction', (req, res) => {
    try {
        var result = new request().transaction(req.body)
        res.send(result)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
})

module.exports = app