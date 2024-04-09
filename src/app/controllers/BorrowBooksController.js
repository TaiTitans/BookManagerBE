const BorrowBooks = require('../models/BorrowBooks')
const Books = require("../models/Books");
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
          const book = await Books.findOne({MaSach: MaSach})
          if(book.SoQuyen>0){
            const borrow = new BorrowBooks(BorrowBooksInfo)
            await borrow.save()
            book.SoQuyen -=1
            await book.save()
            res.status(200).json({data:borrow, error:null})

          }else{
            res.status(400).json({data:null, error:'Sách đã hết'})

          }
          next()
        }catch(error){
          errorHandle(error, res,req,next)
        }
    }
    async delete(req, res,next){
      try {
        const {_id} = req.params
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
    async getAll(req,res){
      try{
        const borrowFindAll = await BorrowBooks.find({})
        if(!borrowFindAll){
          res.status(404).json({data:null, error: "Data Not Found"})
        }
        res.status(200).json({data: borrowFindAll, error: null})
      }
    catch(error){
      errorHandle(error, res,req,next)
    }
  }
}

module.exports = new BorrowBooksController