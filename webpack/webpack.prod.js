const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
    mode: "production",
    plugins: [],
    devtool: "inline-source-map",
    output: {
        path: path.resolve(__dirname, "..", "..", "./gta/dist"),
        filename: "bundle.js",
    },
});
