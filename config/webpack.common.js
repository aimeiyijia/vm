const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = [
  {
    entry: {
      index: path.resolve(__dirname, "../src/ame.js")
    },
    // plugins: [
    //   new HtmlWebpackPlugin({
    //     filename: 'index.html',
    //     template: path.resolve(__dirname, '../src/index.html'),
    //     inject: false
    //   })
    // ],
    output: {
      filename: "[name].js",
      library: 'Ame',
      // libraryTarget: 'this',
      globalObject: 'this',
      path: path.resolve(__dirname, "../dist"),
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: "usage",
                    // loose: true,
                    modules: false,
                    corejs: 3,
                    targets: {
                      ie: "8"
                    }
                  }
                ]
              ],
              plugins: [
                ["@babel/plugin-transform-runtime"],
                ["@babel/plugin-transform-modules-commonjs"]
              ]
            }
          }
        }
      ]
    }
  }
]
