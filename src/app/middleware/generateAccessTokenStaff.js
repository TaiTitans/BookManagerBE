const jwt = require('jsonwebtoken');
const Staff = require('../models/Staff');

function generateAccessTokenStaff(username) {
    const payload = {
        _id: Staff._id,
        MSNV: Staff.MSNV
    };
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
    return accessToken;
}

module.exports = generateAccessTokenStaff;
