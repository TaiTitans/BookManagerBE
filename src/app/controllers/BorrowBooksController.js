const BorrowBooks = require('../models/BorrowBooks')

class BorrowBooksController{
    async create(req,res,next){
        try{
          const {MaDocGia, MaSach, NgayMuon, NgayTra} = req.body  
          const BorrowBooksInfo = {
            MaDocGia: MaDocGia,
            MaSach: MaSach,
            NgayMuon: NgayMuon,
            NgayTra: NgayTra
          }
          const borrow = new BorrowBooks(BorrowBooksInfo)
          await borrow.save()
            res.status(200).json({data:borrow, error:null})
          next()
        }catch(error){
            res.status(400).json({data:null, error:error.message})
        }
    }
}

module.exports = new BorrowBooksController