const authenticateToken = require('../middleware/authenticateToken');

// Middleware kiểm tra quyền của Customer
function authorizeCustomer(req, res, next) {
  if (req.user.MaDocGia) {
    next();
  } else {
    return res.status(403).json({ message: 'Forbidden' });
  }
}

// Middleware kiểm tra quyền của Staff
function authorizeStaff(req, res, next) {
  if (req.user.MSNV) {
    next();
  } else {
    return res.status(403).json({ message: 'Forbidden' });
  }
}


module.exports = {authorizeCustomer, authorizeStaff}