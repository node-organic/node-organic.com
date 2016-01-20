module.exports = {
  'resolve': {
    'extensions': ['', '.webpack.js', '.web.js', '.js']
  },
  'module': {
    'loaders': [
      {
        'test': /\.js$/,
        'loader': 'ng-annotate'
      }
    ]
  }
}
