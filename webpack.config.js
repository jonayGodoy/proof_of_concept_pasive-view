module.exports = {
    entry: './src/boot.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js','.html','.css']
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react','es2015']
                }
            },
            {
                test: /\.(html|css)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};