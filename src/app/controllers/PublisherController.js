const Publisher = require("../models/Publisher")
const handleErrors = require('../middleware/errorHandler');
class PublisherController{
    async create(req,res,next){
        try{
            const {MaNXB, TenNXB, DiaChi} = req.body
            const publisherInfo = {
                MaNXB: MaNXB,
                TenNXB: TenNXB,
                DiaChi: DiaChi
            }
            const publisher = new Publisher(publisherInfo)
            await publisher.save()
                res.status(200).json({data:publisher, error:null})
                next()
        } catch (error){
            handleErrors(error, res); 
        }

    }
    async delete(req, res, next){
        try{
            const {_id} = req.body
            const deletedPublisher = Publisher.find({_id})
            if(!deletedPublisher){
                res.status(400).json({data:null, error:"Data not found"})
            }else{
                await deletedPublisher.deleteOne()
                res.status(200).json({data:"Delete Success", error:null})
            }
            next()
        }catch(error){
            handleErrors(error, res); 
        }
    }
    async getAll(req,res, next){
        try{
          const publisherFindAll = await Publisher.find({})
          if(!publisherFindAll){
            res.status(404).json({data:null, error: "Data Not Found"})
          }
          res.status(200).json({data: publisherFindAll, error: null})
          next()
        }
      catch(error){
        handleErrors(error, res); 
      }
    }
}

module.exports = new PublisherController