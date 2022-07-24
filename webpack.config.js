const path = require("path");

module.exports = {
  mode: "development",  // "production" || "development" || "none"
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "bundleBuild"),
    filename: "build.js",
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], //순서를 꼭 지켜야 함. 오른쪽에서 왼쪽으로 실행됨.
      },
    ],
  },
};
