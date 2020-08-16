const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssCleanupPlugin = require("css-cleanup-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const path = require("path");
 
module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader?classPrefix'
            }
        ]
    },
    plugins: [
        new DuplicatePackageCheckerPlugin({
            verbose: true,
            emitError: true,
            strict: false
        }),
        new CssCleanupPlugin(),
        new HtmlWebpackPlugin({
           template: "./src/index.html",
           filename: "index.html"
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
}



