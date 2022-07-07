const rules = require("./rules.webpack");
const path = require("path");

rules.push({
  test: /\.css$/,
  use: [
    { loader: "style-loader" },
    { loader: "css-loader", options: { importLoaders: 1 } },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          config: path.join(__dirname, "../postcss.config.js"),
        },
      },
    },
  ],
})

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules
  }
}