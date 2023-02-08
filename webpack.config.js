const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = (env, argv) => {
  const isDev = argv.mode === "development";
  const isProd = argv.mode === "production";

  const filename = (ext) => {
    return isDev ? `[name].${ext}` : `[name].[hash].${ext}`;
  };

  const plugins = () => {
    const base = [
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
      new MiniCssExtractPlugin({
        filename: filename("css"),
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "src", "favicon.ico"),
            to: path.resolve(__dirname, "dist"),
          },
        ],
      }),
    ];

    if (isDev) {
      base.push(new ESLintPlugin());
    }

    return base;
  };

  const optimization = () => {
    const config = {
      //вместо того чтобы загружать библиотеку отдельно в
      //несколько комронент этот метод загружает лишь одиг раз
      splitChunks: {
        chunks: "all",
      },
    };

    if (isProd) {
      config.minimizer = [new CssMinimizerPlugin(), new TerserPlugin()];
    }

    return config;
  };
  return {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {main: ["@babel/polyfill", "./index.js"]},
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: filename("js"),
      clean: true,
    },
    resolve: {
      extensions: [".js"],
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@core": path.resolve(__dirname, "src", "core"),
      },
    },
    plugins: plugins(),
    // можно посмотреть в каком файле написан код в браузере
    devtool: isDev ? "source-map" : false,
    devServer: {
      static: {
        directory: path.join(__dirname, "src"),
      },
      //hot module replacement
      //обновляет автоматически если изменить стили
      hot: true,
      //zip
      compress: true,
      port: 4200,
      //открывает бразер
      open: true,
    },
    optimization: optimization(),
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
  };
};
