/* eslint-disable node/no-unpublished-import */
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {DefinePlugin} from 'webpack';
import dotenv from 'dotenv-override-true';

const config = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'RingCentral Engage Voice Agent SDK Demo',
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};

export default config;
