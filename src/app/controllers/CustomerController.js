const Customer = require('../models/Customer')
const errorHandle = require('../middleware/errorHandler')
const bcrypt = require('bcrypt');

class CustomerController{
    async dangky(req, res, next){
        try{
            const {MaDocGia,HoLot,Ten,NgaySinh,GioiTinh,DiaChi,DienThoai} = req.body;
            const existingCustomer = await Customer.findOne({ MaDocGia });
            if (existingCustomer) {
              return res.status(400).json({ message: 'Tài khoản đã tồn tại' });
          }
          const hashedPassword = await bcrypt.hash(MatKhau, 10);
  
          const newCustomer = new Customer({
            MaDocGia,
            HoLot,
            Ten,
            NgaySinh,
            GioiTinh,
            DiaChi,
            DienThoai,
            MatKhau: hashedPassword, // Lưu mật khẩu đã được mã hóa vào cơ sở dữ liệu
        });
        await newCustomer.save();
                res.status(201).json({data:customer, error:null})
        } catch(error){
          errorHandle(error, res,req,next)
        }
        next()
    }
    async getOne(req, res, next){
        try{
          const {_id} = req.body
          const customerFindOne = await Customer.findOne({_id})
    
          if(!customerFindOne){
          res.status(404).json({ data: null, error: "Data Not Found" });
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
            res.status(404).json({data:null, error: "Data Not Found"})
          }
          res.status(200).json({data: customerFindAll, error: null})
          next()
        }
      catch(error){
        errorHandle(error, res,req,next)
      }
    }
    async dangnhap(req,res){
      const{MaDocGia, MatKhau} = req.body;
      try{
        const customer = await Customer.findOne({MaDocGia})
        if(!customer){
          return res.status(404).json({message:"Tai Khoan Khong Ton Tai"})
        }
        const isMatch = await customer.comparePassword(MatKhau)
        if(!isMatch){
          return res.status(401).json({message:"Sai mat khau"})
        }
        res.status(200).json({message:"Dang nhap thanh cong"})
      }catch(error){
      errorHandle(error,res,req,next)
      }
    }


}

module.exports = new CustomerController;