const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin()
    ],
    output: {
        filename: "main.[fullhash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "http://127.0.0.1:5500/dist/"
    }
});