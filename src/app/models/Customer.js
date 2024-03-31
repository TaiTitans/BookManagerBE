const mongoose = require('mongoose')
const Schema = mongoose.Schema

var CustomerSchema = new mongoose.Schema({
    MaDocGia:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    HoLot:{
        type:String,
        required:true,
    },
    Ten:{
        type:String,
        required:true,
    },
    NgaySinh:{
        type:Date,
        required:true,
    },
    GioiTinh:{
        type:String,
        required:true,
        enum: ['Nam', 'Nu']
    },
    DiaChi:{
        type:String,
        required:true,
    },
    DienThoai:{
        type:Number,
        required:true,
    },
},{
    timestamps:true
});

//Export the model
module.exports = mongoose.model('Customer', CustomerSchema);