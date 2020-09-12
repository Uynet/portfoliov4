const path = require ('path');
const outputPath = path.resolve (__dirname, 'dist');
console.log(outputPath);

module.exports = {
    mode: "development",
    entry: "./src/main.tsx",
    output: {
        path: `${__dirname}/dist`,
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            }
        ]
    },
    devServer:{
        contentBase : outputPath
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    }
};