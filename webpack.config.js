const path = require("path");
const outputPath = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: "./src/main.tsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
  },
  module: {
    rules: [
       {
        test: /\.(jpg|png)$/,
        loaders: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 2, // postcss-loader, sass-loader
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  devServer: {
    contentBase: outputPath,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
};
