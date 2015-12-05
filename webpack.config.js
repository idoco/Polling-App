module.exports = {
    entry: "./app-client.js",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            {
                exclude: /(node_moudles|app-server.js)/,
                loader: 'babel',
                query: {
                    presets:['react']
                }
            }
        ]
    }
};