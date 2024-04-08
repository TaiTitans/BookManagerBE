const Books = require("../models/Books");
const errorHandle = require("../middleware/errorHandler")
class BooksController {
  async create(req, res, next) {
    try {
      const { MaSach, TenSach, DonGia, SoQuyen, NamXuatBan, MaNXB, TacGia, HinhAnh } = req.body;

      const BooksInfo = {
        MaSach: MaSach,
        TenSach: TenSach,
        DonGia: DonGia,
        SoQuyen: SoQuyen,
        NamXuatBan: NamXuatBan,
        MaNXB: MaNXB,
        TacGia: TacGia,
        HinhAnh: HinhAnh
      };

      const books = new Books(BooksInfo);
      await books.save();

      res.status(200).json({ data: books, error: null });
      next();
    } catch (error) {
      errorHandle(error, res,req,next)
    }
  }
  async update(req, res, next) {
    try {
        const {_id ,MaSach, TenSach, DonGia, SoQuyen, NamXuatBan, MaNXB, TacGia, HinhAnh } = req.body;
        const booksUpdate = await Books.findOne({ MaSach });


        if (!booksUpdate) {
            return res.status(404).json({ data: null, error: "Books Data Not Found" });
        }


        booksUpdate.MaSach = MaSach;
        booksUpdate.TenSach = TenSach;
        booksUpdate.DonGia = DonGia;
        booksUpdate.SoQuyen = SoQuyen;
        booksUpdate.NamXuatBan = NamXuatBan;
        booksUpdate.MaNXB = MaNXB;
        booksUpdate.TacGia = TacGia;
        booksUpdate.HinhAnh = HinhAnh

        await booksUpdate.save();
        console.log("Updated book:", booksUpdate);
        return res.status(200).json({ data: booksUpdate, error: null });
        next()
    } catch (error) {
      errorHandle(error, res,req,next)
    }
}
async delete(req, res, next){
  try {
    const {_id} = req.params
    const booksDelete = await Books.findOne({ _id });
    if (!booksDelete) {
      return res.status(404).json({ data: null, error: "Books Data Not Found" });
  } else{
    await booksDelete.deleteOne()
    res.status(200).json({data:booksDelete, error:null})
  }

    
  } catch(error){
    errorHandle(error, res,req,next)
  }
}
  async getOne(req, res, next){
    try{
      const {_id} = req.params._id
      const booksFind = await Books.findOne({_id})

      if(!booksFind){
      res.status(404).json({ data: null, error: "Books Data Not Found" });
      } 
      res.status(200).json({ data: booksFind, error: null });
    }catch(error){
      errorHandle(error, res,req,next)
    }
  }
  async getAll(req,res){
    try{
      const booksFindAll = await Books.find({})
      if(!booksFindAll){
        res.status(404).json({data:null, error: "Books Data Not Found"})
      }
      res.status(200).json({data: booksFindAll, error: null})
    }
  catch(error){
    errorHandle(error, res,req,next)
  }
}
}
module.exports = new BooksController();