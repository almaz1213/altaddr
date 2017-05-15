var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {altaddrlib:'./src/code/altaddrlib.ts'},
    output: {
        filename: '[name].min.js',
        path: __dirname + '/dist/',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: [/node_modules/, /bckp/, /others/],
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }

};