module.exports = function(plasma, dna, helpers) {
  return {
    "GET": function(req, res, next) {
      plasma.emit("modules/cached", function(err, result){
        if(err) return next(err)
        res.response = result
        next()
      })
    }
  }
}