const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffSchema = new Schema({
    MSNV:{type: String, required: true,unique: true},
    HoTenNV:{type:String,required:true},
    Password: {type:String,
            required:true,
            minLength: 7
    },
    ChucVu:{type:String,required:true, enum: ['Staff', 'Admin']},
    DiaChi:{type:String,required:true},
    SDT: {type:Number,required:true,minLength: 10,unique: true}},{
    timestamps: true
  });

const Staff = mongoose.model('Staff',StaffSchema);
module.exports = Staff;