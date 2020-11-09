const express = require('express')
const app = express()

app.listen (3000, function (req, res){
    console.log('Bienvenidos a Mercado Liebre');
})

app.get ('/', function (req, res){
    res.sendFile(__dirname + '/views/home.html')
})

app.get ('*', function(req, res){
    res.sendFile(__dirname + '/public' + req.url)
})
