var path = require('path');

module.exports = {
    entry: "./web/static/js/app.js",
    output: {
      path: path.join(__dirname, "/priv/static/js"),
      filename: "app.js"
    },
    devtool: 'source-map',
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
            }
          ]
    }
};