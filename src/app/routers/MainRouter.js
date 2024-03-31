const staffRouter = require('./StaffRouter');
const customerRouter = require('./CustomerRouter')
const publisherRouter = require('./PublisherRouter')
const booksRouter = require('./BooksRouter')
const borrowBooksRouter = require('./BorrowBooksRouter')
const {json} = require('express');
function route(app){
    app.use('/staff',staffRouter),
    app.use('/customer', customerRouter),
    app.use('/publisher', publisherRouter)
    app.use('/books', booksRouter)
    app.use('/borrow', borrowBooksRouter)
}

module.exports = route;