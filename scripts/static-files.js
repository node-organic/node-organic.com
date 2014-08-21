var async = require("async")
var exec = require("child_process").exec

var processEntry = function(angel, entry, done) {
  async.each(angel.dna.public[entry], function(folderpath, next){
    exec("mkdir -p "+angel.dna.nginx.staticFolder+"/"+entry, function(err){
      if(err) return next(err)
      exec("cp -r "+folderpath+"/* "+angel.dna.nginx.staticFolder+"/"+entry, next)
    })
  }, done)
}

module.exports = function(angel, next){
  var processing = 0
  for(var entry in angel.dna.public) {
    processing += 1
    processEntry(angel, entry, function(err){
      processing -= 1
      if(err) {
        console.error(err)
        process.exit(1)
      } else
        console.info("success")  
      if(processing == 0) next && next()
    })
  }
}