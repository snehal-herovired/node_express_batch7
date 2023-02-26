const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());//helps you to enable the json formatting of req content
const data =require("./data")
// get ,post

app.get("/info", (req,res) => {
    // res.json({
    //     message: "sending data",
    //     login: true,
    //     data:data
    // }).status(201)
    // res.send(data)
    res.status(201).json({  message: "sending data",
        login: true,
        data:data})
})

//post
// username and password is given by client during login.
// user us using form to submit this data.
// server side using the post request to handle the data.

// we try handle the body , contetn in json format
app.post("/register", (req, res) => {
    // request from client side being handled here..
    console.log(req.body);
    let username = req.body.username
    let password = req.body.password
    console.log(username,password,"we are geeting this values from req body");
    res.json({
        message:"data recieved successfully"
    })
    
})



app.listen(port, () => {
    console.log("Server has been started on port 3000")
})

// creating server : npm express
// commented outline of each line express.
// get request
// commented outline of get request
// difference between json and send.
// what happens if you send multiple responses.
// how to set statuscode.
