
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/ping', (request, response)=>{
    response.send("pong");
});

app.get('/', (request, response)=>{
    response.sendfile(__dirname + "/index.html")
});

app.post("/calculate", (request, response)=>{
    let body = request.body;
    let num1 = Number(body.num1);
    let num2 = Number(body.num2);
    let sum = num1 + num2;
    response.send(sum.toString());
});

const serverPort = 3000;
app.listen(serverPort, ()=>{
    console.log("I'm ready to server on " + serverPort)
});
