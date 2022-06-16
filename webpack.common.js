const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /web-worker\.js$/,
        use: {
          loader: 'worker-loader',
        },
      },
      {
        test: /service.worker\.js$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(s*)css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      },
      {
        test: /\.(txt)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // new WorkboxPlugin.GenerateSW({
    //   clientsClaim: true,
    //   skipWaiting: true,
    //   cleanupOutdatedCaches: true,
    // }),
  ],
};

// const path = require('path');
// const HtmlWebPackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');

// module.exports = {
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//   },
//   module: {
//     rules: [
//       {
//         test: /web-worker\.js$/,
//         use: {
//           loader: 'worker-loader',
//         },
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: 'html-loader',
//           },
//         ],
//       },
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, 'css-loader'],
//       },
//       {
//         test: /\.(png|jpg|gif)$/i,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 8192,
//             },
//           },
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebPackPlugin({
//       template: './src/index.html',
//       filename: './index.html',
//     }),
//     new MiniCssExtractPlugin({
//       filename: '[name].css',
//       chunkFilename: '[id].css',
//     }),
//     new WorkboxPlugin.GenerateSW({
//       clientsClaim: true,
//       skipWaiting: true,
//     }),
//   ],
// };
