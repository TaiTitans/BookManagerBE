function handleErrors(err, req, res, next){
    res.status(400).json({data:null, error: err.message})
}

module.exports = handleErrors