var gulp = require("gulp")
var path = require("path")
var async = require("async")

module.exports = function(angel){
  angel.on("prepare static files", function(angel, next){
    var publicData = require("../dna/public")
    var nginxData = require("../dna/nginx")
    var target = path.normalize(path.join(process.cwd(), nginxData.staticFolder))
    var moved = []
    var tasks = []
    var move = function(sources, publicSuffix){
      return function(done) {
        var dest = target+"/"+publicSuffix
        var sourcePaths = sources.map(function(path){
          if(typeof path == "object")
            return path.path+"/**/"+path.include
          else
            return path+"/**/*.*"
        })
        gulp.src(sourcePaths)
          .pipe(gulp.dest(dest))
          .on("end", function(){
            moved.push({sources: sourcePaths, dest: dest})
            done()
          })
          .on("error", done)
      }
    }
    for(var mountUrl in publicData) {
      tasks.push(move(publicData[mountUrl], mountUrl.replace("public", "")))
    }
    async.parallel(tasks, function(err){
      next && next(err, moved)
      console.info("Combination ",err?"FAILED":"SUCCESSFUL")
    })
  })
}