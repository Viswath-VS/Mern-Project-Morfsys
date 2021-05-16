import path from "path";
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
// import {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const webpackConfig = ():Configuration => {
  return {
    mode: "development",
    entry: "./src",
    devtool: "eval",
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index.js',
    },
    devServer:{
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: [/dist/, /node_modules/],
        },
        {
          test: /\.(png|jpeg|svg|gif)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
          exclude: [/dist/, /node_modules/],
        },
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader", "sass-loader"],
          exclude: [/dist/, /node_modules/],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: path.join(__dirname, "/public/index.html"),
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      plugins: [
        new TsconfigPathsPlugin({
            extensions: ['.ts', '.tsx', '.js', '.css', '.module.css'],
        }),
    ],
    },
  };
};

export default webpackConfig;
