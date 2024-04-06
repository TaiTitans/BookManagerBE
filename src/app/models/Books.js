const mongoose = require('mongoose')
const Schema = mongoose.Schema



// Declare the Schema of the Mongo model
const BooksSchema = new Schema({
    MaSach:{
        type:String,
        required:true,
        unique:true,
        index:true,
        ref: 'BorrowBooks',
    },
    TenSach:{
        type:String,
        required:true,
    },
    DonGia:{
        type:Number,
        required:true,
    },
    SoQuyen:{
        type:Number,
        required:true,
    },
    NamXuatBan:{
        type:Number,
        required:true,
    },
    MaNXB: {
        type: String, 
        ref: 'Publisher',
    },
    TacGia: {
        type: String,
        required:true,
    },
    HinhAnh:{
        type: String,
        require:true
    }
});

//Export the model
module.exports = mongoose.model('Books', BooksSchema);