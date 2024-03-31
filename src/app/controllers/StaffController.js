const Staff = require('../models/Staff');

class StaffController{
     async create(req, res, next){
          try{
             const {MSNV,HoTenNV,Password,ChucVu,DiaChi,SDT} = req.body;
             //TODO check user is exist or not
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
}
module.exports = new StaffController;