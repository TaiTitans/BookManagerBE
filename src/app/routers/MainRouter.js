const readerRouter = require('./ReaderRouter');
const {json} = require('express');
function route(app){
    app.use('/reader',readerRouter);
}

module.exports = route;