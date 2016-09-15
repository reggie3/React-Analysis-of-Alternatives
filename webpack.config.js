var webpack = require('webpack');
var path = require('path');
// Import the plugin:
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: ['./client/client.js'],
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new DashboardPlugin()
        // ,
        // new webpack.NoErrors.Plugin()
    ],

    // tell webpack which loaders we want applied to specified files. 
    // generate sourcemaps on the JavaScript files,
    preLoaders: [
        {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components|archive)/,
            
            loader: 'source-map'
        }
    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                exclude: /(archive)/,
                include: /styles/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                    'sass?outputStyle=expanded'
                ]
            },
            {
                test: /\.css$/,
                exclude: /(archive)/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                ]
            },

            // http://humaan.com/getting-started-with-webpack-and-react-es6-style/
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                exclude: /(archive)/,
                loaders: [
                    'url?limit=8192',
                    'img'
                ]
            },
            {
                test: /\.html$/,
                exclude: /(archive)/,
                loader: "html"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|archive)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.less$/,
                exclude: /(archive)/,
                loaders: ['style', 'css', 'less']
            },

            // required to get bootstrap fonts working also
            {
                test: /\.(eot|ttf|wav|mp3|woff(2)?)$/,
                loader: 'file-loader'
            }
        ]
    },

    devServer: {
        contentBase: "./client",
        colors: true,
        historyApiFallback: true,
        inline: true,
        port: 8080
    }
}
