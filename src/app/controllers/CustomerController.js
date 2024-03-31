const Customer = require('../models/Customer')

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
}

module.exports = new CustomerController;