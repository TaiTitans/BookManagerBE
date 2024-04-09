function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) return res.status(401).json({ message: 'No token provided' });
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: 'Failed to authenticate token' });
  
      // Lưu thông tin người dùng vào request
      req.user = user;
  
      // Phân quyền cho Customer và Staff
      if (user.MaDocGia) {
        // Quyền của Customer
        next();
      } else if (user.MSNV) {
        // Quyền của Staff
        next();
      } else {
        return res.status(403).json({ message: 'Forbidden' });
      }
    });
  }

module.exports = authenticateToken