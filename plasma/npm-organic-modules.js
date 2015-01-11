var path = require("path")
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
  var parseAndRemember = function(data) {
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
    result.reverse() // bring latest on top
  }
  var refreshMemory = function(){
    if(dna.log)
      console.log("refreshing organic modules memory")
    var startMoment = moment()
    npm.commands.search(["organic-"], true, function(err, data){
      if(dna.log) console.log("npm search results:", err, typeof data)
      if(err) return console.error(err)
      parseAndRemember(data)
      if(dna.log)
        console.info("refreshed in ", moment().diff(startMoment))
    })
  }

  if(dna.log) console.log("npm load")
  if(!dna.useMemory)
    npm.load({ loglevel: 'silent' }, function (er) {
      if(dna.log) console.log("npm loaded", er)
      if(er) console.error(er)
      refreshMemory()
      if(dna.refreshInterval)
        refreshIntervalID = setInterval(refreshMemory, dna.refreshInterval)
    })
  else
    result = require(path.join(process.cwd(), dna.useMemory))

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