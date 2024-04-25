const mongoose = require('mongoose')
const Schema = mongoose.Schema


// Declare the Schema of the Mongo model
const borrowBooksSchema = new Schema({
    Sach: { type: Schema.Types.ObjectId, ref: 'Books' },
    MaDocGia:{
        type:String,
        required:true,
        index:true,
        ref: 'Customer'
    },
    MaSach:{
        type: String,
        required:true,
        // ref: 'Books'
    },
    TrangThai:{
        type: Boolean,
        default: false
    },
    NgayMuon:{
        type:Date,
        required:true,
    },
    NgayTra:{
        type:Date,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('BorrowBooks', borrowBooksSchema);