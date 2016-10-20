let path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        signIn: [
            `bootstrap-loader/lib/bootstrap.loader?extractStyles&configFilePath=${__dirname}/signin.yml!bootstrap-loader/no-op.js`
        ],
        app: [
            `bootstrap-loader/lib/bootstrap.loader?extractStyles&configFilePath=${__dirname}/app.yml!bootstrap-loader/no-op.js`
        ]
    },
    output: {
        path: path.join(__dirname, 'build2'),
        filename: '[name].bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extension: ['', '.js', '.scss']
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: 'raw'
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'style',
                'css!sass?outputStyle=expanded'
            )
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(woff2?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url?name=[name].[ext]&limit=65000'
        }]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin,
        new webpack.SourceMapDevToolPlugin(),
        new ExtractTextPlugin('[name].bundle.css')
    ]
};
