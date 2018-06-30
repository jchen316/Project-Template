const express = require("express");

const bodyParser = require("body-parser");

// const router = require('./routes/api')
// const server = require('http').createServer(app)
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../../client/dist")));

// app.use('/api', router);

app.get("/*", (req, res) => {
  console.log("Serving up Index.html");
  res.sendFile(path.resolve(__dirname, "../../client/dist/index.html"));
});

app.listen(port, (err) => {
  if(err){
    throw err;
  }
  console.log("Listening on port", port);
});
