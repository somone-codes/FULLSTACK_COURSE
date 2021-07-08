//import required modules
const express = require("express");
const bodyParser = require("body-parser");
const ItemModel = require(__dirname + '/models/itemModel');

//setup
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


//routes
app.get("/", function(req, res) {
  ItemModel.fetchTodoItems().then((data => {
    if(data.length === 0){
      ItemModel.insertTodoItems(['Welcome to todo List. :)', 'Type new Item and hit + button to add', '<-- Hit this to' +
      ' delete item '])
          .then(()=> res.redirect("/"));

    }else{
      res.render("list", {listTitle: "today", newListItems: data})
    }
  }))
});

app.post("/addItem", function(req, res){
  const item = req.body.newItem;
  ItemModel.insertTodoItem(item).then(()=>{
    console.log("data insert, redirecting to home page");
    res.redirect("/");
  });
});


app.post("/deleteItem", function(req, res){

  const itemId = req.body.checkbox;

  ItemModel.deleteTodoItem(itemId).then(()=>{
    console.log("data delete, redirecting to home page");
    res.redirect("/");
  });
});

//start server
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
