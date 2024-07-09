const path = require('path');

module.exports = {
  mode: 'production',
  entry: './server/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'school-election-server.js',
  },
  target: 'node',
};