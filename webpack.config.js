const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                use: [
                    "vue-style-loader",
                    {
                        loader: "css-loader",
                        options: { sourceMap: true },
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: true },
                    },
                ],
            },
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader'
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: [".vue", ".js"],
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    devServer: {
        compress: true,
        port: 9000,
        open: true,
        publicPath: '/dist/',   
    },
}