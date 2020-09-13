require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const app = express();

const port = process.env.PORT || 3000;

// Body parser
app.use(express.urlencoded({ extended: false }));

app.get('/', function(req, res){
    res.send("Welcome to the machine");
});

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port ${port}
Visit http://localhost:${port}`);
});