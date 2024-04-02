const Customer = require('../models/Customer')
const errorHandle = require('../middleware/errorHandler')
class CustomerController{
    async create(req, res, next){
        try{
            const {MaDocGia,HoLot,Ten,NgaySinh,GioiTinh,DiaChi,DienThoai} = req.body;
            const customerInfo = {
                MaDocGia: MaDocGia,
                HoLot: HoLot,
                Ten: Ten,
                NgaySinh: NgaySinh,
                GioiTinh: GioiTinh,
                DiaChi: DiaChi,
                DienThoai: DienThoai
            }
            const customer = new Customer(customerInfo)
            await customer.save()
                res.status(200).json({data:customer, error:null})
        } catch(error){
            res.status(400).json({data:null, error:error})
        }
        next()
    }
    async getOne(req, res, next){
        try{
          const {_id} = req.body
          const customerFindOne = await Customer.findOne({_id})
    
          if(!customerFindOne){
          res.status(404).json({ data: null, error: "Books Data Not Found" });
          } 
          res.status(200).json({ data: customerFindOne, error: null });
        }catch(error){
          errorHandle(error, res,req,next)
        }
      }
      async getAll(req,res, next){
        try{
          const customerFindAll = await Customer.find({})
          if(!customerFindAll){
            res.status(404).json({data:null, error: "Books Data Not Found"})
          }
          res.status(200).json({data: customerFindAll, error: null})
          next()
        }
      catch(error){
        errorHandle(error, res,req,next)
      }
    }
}

module.exports = new CustomerController;