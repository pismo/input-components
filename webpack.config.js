module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "./dist/bundle.js",
        libraryTarget: 'umd'
    },

    devtool: "source-map",

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
    },

    externals: {
        "angular": "angular"
    },
};
