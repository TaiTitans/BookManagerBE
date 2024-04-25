const BorrowBooks = require('../models/BorrowBooks')
const Books = require("../models/Books");
const handleErrors = require('../middleware/errorHandler');
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
          handleErrors(error, res); 
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
          const book = await Books.findOne({MaSach: borrowDeleted.MaSach});
          book.SoQuyen += 1;
          await book.save();
          res.status(200).json({data:'Deleted Success', error:null})
        }
        next()
      } catch(error){
        handleErrors(error, res); 
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
      handleErrors(error, res); 
    }
  }
  async getAllWithCustomer(req, res) {
    try {
        const { MaDocGia } = req.params;

        if (!MaDocGia) {
            return res.status(400).json({ data: null, error: "MaDocGia is required" });
        }

        const borrowFindAll = await BorrowBooks.find({ MaDocGia })
            .populate('Sach')
            .exec();
            
        if (!borrowFindAll || borrowFindAll.length === 0) {
            return res.status(404).json({ data: null, error: "Data Not Found" });
        }
        var data = [];
        borrowFindAll.forEach(item => {
          data.push({
            "_id": item._id,
          "TenSach": item.Sach.TenSach,
          "MaDocGia": item.MaDocGia,
          "MaSach": item.MaSach,
          "TrangThai": item.TrangThai,
          "NgayMuon":item.NgayMuon,
          "NgayTra":item.NgayTra
          });
        })
        return res.status(200).json({ data:data, error: null });
    } catch (error) {
        handleErrors(error, res);
    }
}

  async createBorrowBook(req, res, next) {
    try {
      const MaDocGia = req.body.MaDocGia || this.getMemberID();
      const MaSach = req.body.MaSach;
  
      // Lấy ngày hiện tại
      const NgayMuon = new Date();
  
      // Tính ngày trả (30 ngày sau)
      const NgayTra = new Date(NgayMuon.getTime() + (30 * 24 * 60 * 60 * 1000));
      const Sach = req.body._id
      const BorrowBooksInfo = {
        MaDocGia,
        MaSach,
        NgayMuon,
        NgayTra,
        Sach,
      };
  
      const book = await Books.findOne({ MaSach });
      if (book.SoQuyen > 0) {
        const borrow = new BorrowBooks(BorrowBooksInfo);
        await borrow.save();
        book.SoQuyen -= 1;
        await book.save();
        return res.status(200).json({ data: borrow, error: null });
      } else {
        return res.status(400).json({ data: null, error: 'Sách đã hết' });
      }
      next();
    } catch (error) {
      handleErrors(error, res); 
    }
  }
  async duyetMuon(req, res) {
    try {
        const { _id, TrangThai } = req.body;
        const updateStatus = await BorrowBooks.findOne({ _id });
        if (!updateStatus) {
            return res.status(404).json({ data: null, error: 'Không tìm thấy sách được mượn' });
        }

        updateStatus.TrangThai = TrangThai;
        await updateStatus.save();
        
        return res.status(200).json({ data: updateStatus, error: null });
    } catch (error) {
        handleErrors(error, res);
    }
}

}

module.exports = new BorrowBooksController