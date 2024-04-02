const BorrowBooks = require('../models/BorrowBooks')
const errorHandle = require('../middleware/errorHandler')
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
          errorHandle(error, res,req,next)
        }
    }
    async delete(req, res,next){
      try {
        const {_id} = req.body
        const borrowDeleted = await BorrowBooks.findOne({_id})
        if(!borrowDeleted){
          res.status(400).json({data:null, error:"Data Not Found"})
        }else{
          await borrowDeleted.deleteOne()
          res.status(200).json({data:'Deleted Success', error:null})
        }
        next()
      } catch(error){
        errorHandle(error, res,req,next)
      }
    } 
}

module.exports = new BorrowBooksController