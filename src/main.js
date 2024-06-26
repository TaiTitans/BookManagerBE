const express = require('express')
const cors = require('cors')
const app = express();
require('dotenv').config();

// const { json } = require('body-parser');
const route = require('./app/routers/MainRouter');
const db = require('./config/configDb');
//socket.io
const http = require('http');
const server = http.createServer(app);
const corsFeature = require('./config/cors')
global.__basedir = __dirname;

const port = process.env.PORT || 3000;
// cors
app.use(cors(corsFeature))

//connect to DB
db.connect();

// cookie
const cookieParser = require('cookie-parser');

app.use(cookieParser());


// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// for parsing application/json
app.use(express.json());


route(app);

server.listen(port, () => {
  console.log(`app listening at http://localhost:${server.address().port}`);
})