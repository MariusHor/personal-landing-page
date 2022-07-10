const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: "./src/app.js",
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    open: true,
    port: 3000,
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/i, //For making turning Js6 to Js5 and make it compatible with older browsers
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      {
        test: /\.ttf|woff$/, //For fonts
        use: [
          'url-loader',
        ],
        },

      {
        test: /\.mp4/,
        type: 'asset/resource',
        generator: {
          filename: 'video/[hash][ext][query]'
          }
      },
      
      {
        test: /\.s?css$/, //For turning the scss file into a css file
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      },

      {
        test: /\.(png|svg|jpg|jpeg|ico|gif|webp)$/i, //For images
        type: "asset/resource",
        generator: {
        filename: 'assets/[hash][ext][query]'
        }
      },

      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        }
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "style/[name].css",
      chunkFilename: "[id].css"
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
      extractComments: false,
      }),
      new OptimizeCssAssetsPlugin(),
    ],
    },
};

