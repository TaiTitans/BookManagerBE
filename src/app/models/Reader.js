const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReaderSchema = new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    dayOfBirth: {type:String,
            required:true,
    },
    sex:{type:String,required:true},
    phone:{type:String,required:true,unique: true},
    address: {type:String,required:true,minLength: 7}},{
    timestamps: true
  });

const Reader = mongoose.model('Reader',ReaderSchema);
module.exports = Reader;