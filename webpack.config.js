var path    = require('path');
var webpack = require('webpack');

const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "./dist/bundle.js",
    },

    sassLoader: {
        includePaths: [
            'node_modules/muicss'
        ]
    },

    devtool: "source-map",

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js"]
    },

    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['es2015']
                }
            }
        ],

        preLoaders: []
    },

    externals: {
        "angular": "angular"
    },
};