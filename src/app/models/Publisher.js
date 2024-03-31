const mongoose = require('mongoose')
const Schema = mongoose.Schema;; // Erase if already required

// Declare the Schema of the Mongo model
const PublisherSchema = new Schema({
    MaNXB:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    TenNXB:{
        type:String,
        required:true,
    },
    DiaChi:{
        type:String,
        required:true,
    },
},{
    timestamps:true
});

//Export the model
module.exports = mongoose.model('Publisher', PublisherSchema);