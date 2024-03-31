const Books = require("../models/Books");

class BooksController {
  async create(req, res, next) {
    try {
      const { MaSach, TenSach, DonGia, SoQuyen, NamXuatBan, MaNXB, TacGia } = req.body;

      const BooksInfo = {
        MaSach: MaSach,
        TenSach: TenSach,
        DonGia: DonGia,
        SoQuyen: SoQuyen,
        NamXuatBan: NamXuatBan,
        MaNXB: MaNXB,
        TacGia: TacGia,
      };

      const books = new Books(BooksInfo);
      await books.save();

      res.status(200).json({ data: books, error: null });
      next();
    } catch (error) {
      res.status(400).json({ data: null, error: error.message });
    }
  }
}

module.exports = new BooksController();