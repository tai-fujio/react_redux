// const path = require('path');
// const publidDir = path.join(__dirname + '/public');
// module.exports = {
//   entry: [
//     './src/index.js',
//   ],
//   output: {
//     path: publidDir,
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [{
//       exclude: /node_modules/,
//       loader: 'babel-loader',
//       query: {
//         presets: ['react', 'es2015'],
//       }
//     }]
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
//   devServer: {
//     historyApiFallback: true,
//     contentBase: publidDir
//   }
// };

const path = require('path');
const Dotenv = require('dotenv-webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const publidDir = path.join(__dirname, '/public');
module.exports = [
  {
    plugins: [
      new Dotenv(),
    ],
    entry: [
      './src/index.jsx',
    ],
    node: {
      fs: "empty"
    },
    // target: 'node',
    output: {
      path: publidDir,
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: {
      loaders: [{
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      }],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      historyApiFallback: true,
      contentBase: publidDir,
    },
  },
  {
    entry: {
      style: './stylesheets/index.scss',
    },
    output: {
      path: publidDir,
      publicPath: '/',
      filename: 'bundle.css',
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('bundle.css'),
    ],
  },
];
