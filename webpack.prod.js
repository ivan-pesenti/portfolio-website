const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "main.[fullhash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "http://127.0.0.1:5500/dist/"
    }
});