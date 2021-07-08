//import required modules
const express = require("express");
const bodyParser = require("body-parser");
const ItemModel = require(__dirname + '/models/itemModel');
const ListModel = require(__dirname + '/models/listModel');
const _         = require('lodash')
//setup
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const defaultItems = ['Welcome to todo List. :)', 'Type new Item and hit + button to add', '<-- Hit this to' +
' delete item ']

//routes

app.get("/", function(req, res) {
  res.redirect("/today")
});

app.post("/deleteItem", function(req, res){

    const itemId = req.body.checkbox;
    const listName = req.body.redirect;

    ListModel.findOneListItemAndDelete(listName, itemId).then(()=>{
        console.log("data delete, redirecting to home page");
        res.redirect("/" + listName );
    });
});

app.route("/:listName")
    .get(function (req, res) {
      const listName = _.capitalize(req.params.listName);
      ListModel.fetchOneList(listName).then( (data) => {
        if (data)
          res.render("list", {listTitle: listName, newListItems: data.tasks});
        else
         ListModel.insertListItems(listName, defaultItems).then((data) => res.redirect("/" + listName));
      });
    })

    .post(function (req, res) {
        const item = req.body.newItem;
        const listName = req.params.listName

      ListModel.fetchOneList(listName).then( (data) => {
          ListModel.saveListObject(data, item).then((data) => res.redirect("/" + listName))
        });
    });


//start server
let port = process.env.PORT;

if(port == null || port == "")
    port = 3000

app.listen(port, function() {
  console.log("Server started on port " + port);
});
