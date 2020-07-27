const webpack = require("webpack");

module.exports = {
  productionSourceMap: false,
  pwa:{
    name: 'watame button',
    themeColor: '#fdfbe6',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    assetsVersion: '1.0',
    manifestOptions: {
      display: 'standalone'
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }),
    ],
  },
};
