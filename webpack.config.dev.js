module.exports = {
    entry: {
        "agency-calculator": ["./src/index.js"]
    },
    output: {
        path: "./dist/js",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
};
