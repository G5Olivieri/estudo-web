module.exports = {
    entry: './app/App.jsx',
    output: {
        path: __dirname + "/public/",
        filename: 'bundle.js'
    },
    devServer:{
        inline: true,
        contentBase: './public',
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
}