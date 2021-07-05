const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const date = require(__dirname + '/date.js')
const app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true})).use(express.static('public'))

let listElements = ["item1", "item2"]
let workListElements = []

app.get('/ping', (request, response)=>{
    response.send("pong");
});



app.get('/', (request, response) => {
    response.render('list', {listName:date.today(), listItems: listElements});
});

app.get('/workList', (request, response) => {
    response.render('list', {listName:'workList', listItems: workListElements});
});

app.post('/todoList', (request, response) => {
    let item = request.body.item;
    if(item) {
        if (request.body.addListItemButton === 'workList') {
            workListElements.push(item);
            response.redirect("/workList");
        }
       else {
            listElements.push(item);
            response.redirect("/");
        }
    }
});

app.get('/about', (request, response) => {
    response.render('about');
});

const serverPort = 3000;
app.listen(3000, ()=> console.log("I'm ready to server on " + serverPort))