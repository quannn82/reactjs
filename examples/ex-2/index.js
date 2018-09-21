var express = require("express");
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended: false});
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);

var mang = ["Android", "IOS", "PHP", "ReactJS"];

app.get("/", function(rep, res) {
  res.render("home");
});

app.post('/getNotes', function(req, res) {
  res.send(mang);
});
app.post('/addNote', parser, function(req, res) {
  var newNote = req.body.note;
  mang.push(newNote);
  res.send(mang);
});
app.post('/delNote', parser, function(req, res) {
  var id = req.body.id;
  mang.splice(id, 1);
  res.send(mang);
});
app.post('/editNote', parser, function(req, res) {
  var id = req.body.id,
      text = req.body.text;
  mang[id] = text;
  res.send(mang);
});
