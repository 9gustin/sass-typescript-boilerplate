const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'app.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   module: {
//     rules: [
//       { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
//     ]
//   }
// };
module.exports = {
    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };