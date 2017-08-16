let path = require('path');

let DIST_DIR = path.resolve(__dirname, 'dist');
let SRC_DIR = path.resolve(__dirname, 'src');


let config = {
  entry: {
    main: SRC_DIR + '/app/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR + '/app',
    publicPath: '/app/'
  },
  module: {
    loaders:[
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  }
};

module.exports = config;