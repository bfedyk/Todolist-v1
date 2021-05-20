// Change var declarations to 'let'

const express = require('express');
const bodyParser = require('body-parser');

// Access new local date module in date.js app.get
// This can be access within the home route
const date = require(__dirname + "/date.js");

//  Define server port
const portNum = 3000;

// Define app instance of express
const app = express();

// Define (global) empty array items
let items = [];
let workItems = [];

// Parse body data to be used by app
app.use(bodyParser.urlencoded({extended:true}));

// Use public to make styless.css available to server i.e. not stati
app.use(express.static("public"));

// Use ejs templating
app.set("view engine", "ejs");

// Server GET route
app.get("/", function(req, res){

// Access date from the exported module getDate:
// either function getDate() or getDay()
// These functions are in the source date.js
let day = date.getDate();

  // Add both variables to render at same time
  // the newListItem is passed over to be rendered
  // by the redirect in the app.post() section

  res.render("list", {listTitle: day, newListItems: items});

});

// Work page route
app.get("/work", function (req, res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
})

// About page route
app.get("/about", function (req, res){
  res.render("about");
});


app.post("/", function(req,res){

// Retrieve the new item to be added
  let item = req.body.newItem;

// Check the value of the list title
// If work list - add to the work list

  // 'list' will take first word in list title - add item to the
  // Works List
  if (req.body.list === "Work List") {
    workItems.push(item);

    res.redirect("/work");

  } else {
    // Add new item to the day's ToDo list
    items.push(item);

    // Redirect to the home route to pass the new list item
    res.redirect("/");
  }

});

app.listen(portNum, function(){
  console.log("Server listening on port " + portNum);
});
