const Staff = require('../models/Staff');
const errorHandle = require("../middleware/errorHandler")
const generateAccessTokenStaff = require('../middleware/generateAccessTokenStaff');
class StaffController{
     async create(req, res, next){
          try{
             const {MSNV,HoTenNV,Password,ChucVu,DiaChi,SDT} = req.body;
             const StaffInfo = {
                   MSNV: MSNV,
                   HoTenNV: HoTenNV,
                   Password: Password,
                   ChucVu: ChucVu,
                   DiaChi: DiaChi,
                   SDT: SDT
             }
             const staff = new Staff(StaffInfo);
	     await staff.save();
              res.status(200).json({data:staff, error:null});
          } catch (error){
              res.status(400).json({data:null, error:error});
          }
          next();
     }
     async dangnhap(req, res) {
      const { MSNV, Password } = req.body;
      try {
          const staff = await Staff.findOne({ MSNV });
          if (!staff) {
              return res.status(404).json({ message: "Tài Khoản Không Tồn Tại" });
          }
          if (Password !== staff.Password) {
              return res.status(401).json({ message: "Sai mật khẩu" });
          }
  
          const token = generateAccessTokenStaff(staff);
          res.cookie('accessToken', token, { httpOnly: true, maxAge: 3600000 });
          res.status(200).json({ data: { staff: staff.MSNV }, message: "Đăng nhập thành công" });
      } catch (error) {
          errorHandle(error, res);
      }
  }

      async getAll(req,res){
          try{
            const staffFindAll = await Staff.find({})
            if(!staffFindAll){
              res.status(404).json({data:null, error: "Books Data Not Found"})
            }
            res.status(200).json({data: staffFindAll, error: null})
          }
        catch(error){
          errorHandle(error, res,req,next)
        }
      }
      
      async delete(req, res, next){
          try {
            const {_id} = req.params
            const staffDelete = await Staff.findOne({ _id });
            if (!staffDelete) {
              return res.status(404).json({ data: null, error: "Staff Data Not Found" });
          } else{
            await staffDelete.deleteOne()
            res.status(200).json({data:staffDelete, error:null})
          }
        
            
          } catch(error){
            errorHandle(error, res,req,next)
          }
        }
}
module.exports = new StaffController;