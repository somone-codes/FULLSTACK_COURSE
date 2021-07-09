//import required modules
require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
//level3 auth
//const md5_hash = require('md5')
const bcrypt = require('bcrypt');
const saltRounds = parseInt(process.env.SALT_ROUNDS)

const userModel = require(__dirname + '/models/userModel');

//setup
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


//routes

app.get("/", function(req, res) {
    res.render("home");
});
app.route("/register")
    .get(function(req, res) {
    res.render("register");
    })
    .post((req, res)=>{
        let username = req.body.username;
        let email    = req.body.email;
        //level3 auth
        //let password = md5_hash(req.body.password);
        bcrypt.hash(req.body.password, saltRounds)
            .then((hashPass)=> userModel.addUser(username, email, hashPass))
            .then(()=>res.redirect("/login"))
            .catch((e)=>{
                console.log("Error adding user " + e);
                res.send(e);
            })
    });

app.route("/login")
    .get( function(req, res) {
        res.render("login");
    })
    .post((req, res)=>{
        let username = req.body.username;
        //level3 auth
        //let password = md5_hash(req.body.password);
        let password = req.body.password;

        userModel.validateUser(username, password).then((passed)=>{
            if(passed){
                res.render("secrets");
            }
            else{
                res.send("Invalid password");
            }
        }).catch((e) => res.send(e))
    });


app.get("/secrets", function(req, res) {
    res.render("secrets");
});


//start server
let port = process.env.PORT;

if(port == null || port === "") {
    port = 3000
}

app.listen(port, function() {
    console.log("Server started on port " + port);
});
