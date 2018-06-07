const path = require('path');

module.exports = {
  entry: [
    './static/scripts/main.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'static/dist'),
    filename: 'app.bundle.js'
  },
};
