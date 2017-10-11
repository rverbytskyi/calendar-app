var webpack = require('webpack');

module.exports = {
    entry: "./client/index.js",
    output: {
        path: __dirname + '/public/build',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        loaders:[
            {
                test:/\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['env','react']
                    }
                },
                exclude: [/node_modules/, /public/]
            },
            {
                test:/\.css$/,
                loader: "style-loader!css-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test:/\.scss$/,
                loader: "style-loader!css-loader!autoprefixer-loader!sass",
                exclude: [/node_modules/, /public/]
            },
            {
                test:/\.gif$/,
                loader: "url-loader?limit10000&mimetype=image/gif"
            },
            {
                test:/\.jpg$/,
                loader: "url-loader?limit10000&mimetype=image/jpg"
            },
            {
                test:/\.png$/,
                loader: "url-loader?limit10000&mimetype=image/png"
            },
            {
                test:/\.svg$/,
                loader: "url-loader?limit10000&mimetype=image/svg+xml"
            },
            {
                test:/\.jsx$/,
                use: {
                    loader: "babel-loader",
                    options: {
                      presets: ['env','react']
                    }
                },
                exclude: [/node_modules/, /public/]
            },
            {
                test:/\.json$/,
                loader: "json-loader"
            }
        ]
    }
}
