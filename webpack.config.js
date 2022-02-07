
const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  watch: true,
  // watchOptions: {
  //     aggregateTimeout: 500,
  //     poll: 1000 // порверяем измемения раз в секунду
  // },
  module: {
    rules: [
      {test: /\.react$/, use: "react"},
      {test: /\.react-dom$/, use: "react-dom"},
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
       },
    ]
  }

}
