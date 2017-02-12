const webpack = require('webpack');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: './dist/js/bundle.js'
    },
    module: {

    },
    plugins: [

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            except: ['$super','$','exports','require']
        })
    ]
};