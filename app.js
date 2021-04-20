const express = require("express")
const app = express()

app.get("/", function(req,res){
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/newsletter",function(req,res){
    res.sendFile(__dirname + "/views/newsletter.html")
})

app.get("/register",function(req,res){
    res.sendFile(__dirname + "/views/register.html")
})

app.get("/login",function(req,res){
    res.sendFile(__dirname + "/views/login.html")
})

app.get("*",function(req,res){
    res.sendFile(__dirname + "/public/" + req.url)
})

app.listen(3000, function(){
    console.log("Para ver el sitio, ingresá a http://localhost:3000/")
})