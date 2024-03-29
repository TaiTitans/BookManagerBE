const Reader = require('../models/Reader');

class ReaderController{
     async create(req, res, next){
          try{
             const {firstName,lastName,dayOfBirth,address,sex,phone} = req.body;
             //TODO check user is exist or not
             const readerInfo = {
                   firstName: firstName,
                   lastName: lastName,
                   dayOfBirth: dayOfBirth,
                   address: address,
                   sex: sex,
                   phone: phone
             }
             const reader = new Reader(readerInfo);
	     await reader.save();
              res.status(200).json({data:reader, error:null});
          } catch (error){
              res.status(400).json({data:null, error:error});
          }
          next();
     }
}
module.exports = new ReaderController;