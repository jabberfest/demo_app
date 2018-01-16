var path = require('path');

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
                use: [
                  {
                    loader: 'style-loader' // inject CSS to page
                  }, 
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
              }
      ]
  },
  resolve: {
    alias: {
      css: path.resolve(__dirname, './web/static/css'),
      js: path.resolve(__dirname, './web/static/js')
    }
  }
};
