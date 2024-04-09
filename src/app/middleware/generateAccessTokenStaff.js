function generateAccessTokenStaff(staff) {
    const payload = {
        _id: staff._id,
        MSNV: staff.MSNV
    };
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
    return accessToken;
}

module.exports = generateAccessTokenStaff