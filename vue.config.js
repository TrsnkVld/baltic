const webpack = require('webpack');
const path = require('path');

module.exports = {
    configureWebpack: {
	  plugins: [
		new webpack.ProvidePlugin({
		  mapboxgl: 'mapbox-gl',
		}),
	  ],
	},

    publicPath: process.env.NODE_ENV === 'production' ? '/build/' : '/',
    assetsDir: './',
    outputDir: './htdocs/build/',
    indexPath: '../index.html',

    devServer: {
		proxy: {
			'^/(api|upload)/': {
				target:  process.env.SERVER || 'http://baltic-shipping.ss.spider.playnext.net:40088',
				changeOrigin: true,
			},
		},
	},

    lintOnSave: false,

    pluginOptions: {
      i18n: {
        locale: 'ru',
        fallbackLocale: 'ru',
        localeDir: 'locales',
        enableInSFC: false
      }
    }
};
