module.exports = {
    context: __dirname,
    devtool: 'inline-source-map',
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: [/node_modules/] }
        ]
    }
};
