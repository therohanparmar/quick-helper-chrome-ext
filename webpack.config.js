const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin'); // For minification
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // For cleaning output directory

module.exports = {
  mode: 'production', // Enable production mode for tree-shaking and optimization
  entry: './src/js/main.js',  // Entry point for JavaScript
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/main.js',
    clean: true, // Clean output directory before emit
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into separate files
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css'  // Save the CSS to dist/css/
    }),
    new CleanWebpackPlugin() // Clean the output directory before building
  ],
  optimization: {
    minimize: true, // Enable minification
    minimizer: [new TerserPlugin()], // Use TerserPlugin for JS minification
  },
  watch: true,
};
