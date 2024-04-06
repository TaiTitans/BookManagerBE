var whitelist = ['http://localhost:8080']
var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
       callback(new Error(`${origin} Not allowed by CORS`));
      }
    }
  }

module.exports = corsOptions