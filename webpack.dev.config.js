const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry:'./src/index.js',
    output: {
        path: __dirname,
        filename: "./release/build/bundle.js"
    },
    plugins: [
        new htmlWebpackPlugin({
            template : './index.html'
        })
    ],
    module: {
        rules: [{
            test:/\.js?$/,
            exclude:/(node_modules)/,
            loader: "babel-loader"
        }]
    },
    devServer: {
        contentBase: path.join(__dirname,'./release'),
        open:true,
        port:9000
    }
}