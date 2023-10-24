// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.ts', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'cromaui.js',
    library: 'CromaUI',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};