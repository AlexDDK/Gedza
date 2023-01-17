// Это файл для вебпак бандл анализатор
// Запуск анализатора из терминала: NODE_ENV=production node analyze.js


/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
/* eslint-disable semi */
const webpack = require("webpack")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const webpackConfigProd = require('react-scripts/config/webpack.config')(
  'production'
)

webpackConfigProd.plugins.push(new BundleAnalyzerPlugin())

webpack(webpackConfigProd, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err)
  }
})