module.exports = function(plasma, dna, helpers) {
  return {
    "GET": function(req, res, next) {
      res.response = [{
        name: "organic-plasma",
        version: "0.0.5",
        author: "outbounder",
        downloads: 0,
        stars: 0,
        links: {
          "npm": "https://www.npmjs.org/package/organic-plasma",
          "github": "https://github.com/outbounder/organic-plasma"
        }
      },{
        name: "organic-plasma",
        version: "0.0.5",
        author: "outbounder",
        downloads: 0,
        stars: 0,
        links: {
          "npm": "https://www.npmjs.org/package/organic-plasma",
          "github": "https://github.com/outbounder/organic-plasma"
        }
      }]
      next()
    }
  }
}