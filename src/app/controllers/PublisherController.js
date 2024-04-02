const Publisher = require("../models/Publisher")

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
            res.status(400).json({data:null, error:error})
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
            errorHandle(error, res,req,next)
        }
    }
}

module.exports = new PublisherController