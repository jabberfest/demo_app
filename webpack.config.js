var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./web/static/js/app.js",
  output: {
    path: path.join(__dirname, "/priv/static/js"),
    filename: "app.js"
  },
  devtool: 'cheap-eval-source-map',
  module: {
      rules: [
              {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env']
                  }
                }
              },
              {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader', 
                  use: [
                    {
                      loader: 'css-loader' // translates CSS into CommonJS modules
                    },
                    {
                      loader: 'postcss-loader', // Run post css actions
                      options: {
                        plugins: function () { // post css plugins, can be exported to postcss.config.js
                          return [
                            require('precss'),
                            require('autoprefixer')
                          ];
                        }
                      }
                    },{
                      loader: 'sass-loader' // compiles Sass to CSS
                    }
                  ]
                }) 
              }
      ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '../css/[name].css'
    })
  ],
  resolve: {
    alias: {
      css: path.resolve(__dirname, './web/static/css'),
      js: path.resolve(__dirname, './web/static/js')
    }
  }
};
