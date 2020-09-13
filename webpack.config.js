/* eslint-disable no-undef */
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "/src/index.ts"),
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/public/index.html"),
            inject: "body"
        })
    ],
    resolve: {
        extensions: [".ts", ".js"]
    },
    devServer: {  // configuration for webpack-dev-server
        contentBase: "./public",  //source of static assets
        port: 7700, // port to run dev-server
    } 
}