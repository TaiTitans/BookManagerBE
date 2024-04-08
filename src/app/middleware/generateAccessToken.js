const jwt = require('jsonwebtoken');
const Customer = require('../models/Customer');
// generate access token

function generateAccessToken(username){
    const payload = {
        _id: Customer._id,
        MaDocGia: Customer.MaDocGia
    }
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'1d'})
    return accessToken
}



module.exports = generateAccessToken