var express = require('express');
var app = express();

/* app.get('/', (req, res) => {
  res.send("Hello Express");
});
 */

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get('/', (req, res) => {
  res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));

app.get('/json', (req, res) => {
  res.json({"message": 'Hello json'})
});























 module.exports = app;
