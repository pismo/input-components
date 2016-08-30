module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: 'dist/packages/browser',
        libraryTarget: 'umd'
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/]
            }
        ]
    },

    externals: {
        angular: 'angular',
        jquery: 'jquery'
    }
};
