var npm = require("npm")
var moment = require("moment")

module.exports = function(plasma, dna){
  var refreshIntervalID;
  var result = [/*
    {
      name: "organic-plasma",
      version: "0.0.5",
      author: "outbounder",
      description: "",
      ?downloads: 0,
      ?stars: 0,
      links: {
        "npm": "https://www.npmjs.org/package/organic-plasma",
        "github": "https://github.com/outbounder/organic-plasma"
      }
    }
  */]
  var refreshMemory = function(){
    var startMoment = moment()
    npm.commands.search(["organic-"], true, function(err, data){
      if(err) return console.error(err)
      result = []
      for(var packagename in data){
        data[packagename].downloads = "n/a"
        data[packagename].stars = "n/a"
        data[packagename].author = data[packagename].maintainers?data[packagename].maintainers.toString().replace(/=/g, ""):"N/A"
        data[packagename].links = {
          npm: "https://www.npmjs.org/package/"+packagename
        }
        result.push(data[packagename])
      }
      if(dna.log)
        console.info("refreshed in ", moment().diff(startMoment))
    })
  }
  npm.load({ loglevel: 'silent' }, function (er) {
    if(er) console.error(er)
    refreshMemory()
    refreshIntervalID = setInterval(refreshMemory, dna.refreshInterval)
  })
  plasma.on(dna.reactOn, function(c, next){
    next(null, result)
  })

  plasma.on(dna.disposeOn || "kill", function(){
    if(refreshIntervalID) {
      clearInterval(refreshIntervalID)
      refreshIntervalID = null
    }
  })
}