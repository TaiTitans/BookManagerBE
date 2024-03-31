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
}

module.exports = new PublisherController