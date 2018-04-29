const withCSS = require('@zeit/next-css')
const withSASS = require('@zeit/next-sass')
const withSourceMaps = require('@zeit/next-source-maps')
const ManifestPlugin = require('webpack-manifest-plugin')
const OptimizeJsPlugin = require('optimize-js-plugin')

module.exports = withSourceMaps(
	withSASS(
		withCSS({
			webpack (config, {buildId, dev, isServer, defaultLoaders}) {
				config.module.rules.push(
					{
						test: /\.(jpe?g|png|svg|gif)$/,
						use: [
							{
								loader: 'url-loader',
								options: {
									limit: dev ? 256 : 8192,
									publicPath: '/_next/static/images/',
									outputPath: 'static/images/',
									name: '[name]-[hash].[ext]'
								}
							}
						]
					},
					{
						test: /\.md$/,
						use: ['babel-loader', '@mdx-js/loader']
					}
				)

				if (!dev && !isServer) {
					config.plugins.push(new OptimizeJsPlugin(), new ManifestPlugin())
					return config
				}

				return config
			}
		})
	)
)
