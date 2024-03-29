const express = require('express')

const app = express();
require('dotenv').config();

// const { json } = require('body-parser');
const port = process.env.PORT || 3000;
const route = require('./app/routers/MainRouter');
const db = require('./config/ConfigDB');
//socket.io
const http = require('http');
const server = http.createServer(app);

global.__basedir = __dirname;



//connect to DB
db.connect();

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// for parsing application/json
app.use(express.json());


route(app);

server.listen(port, () => {
  console.log(`app listening at http://localhost:${server.address().port}`);
})