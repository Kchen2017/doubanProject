const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    mode: "development",
    entry: path.join(__dirname, "src/main.js"),
    output: {
        path: path.join(__dirname, "disk"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {test: /\.js$/, use: "babel-loader", exclude: /node_modules/},
            {test: /\.css$/, use: ["style-loader", "css-loader"]},
            {test: /\.(jpg|png|gif|jpeg)$/, use: "url-loader"}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, "src/index.html"),
            filename: "index.html"
        })
    ]
}