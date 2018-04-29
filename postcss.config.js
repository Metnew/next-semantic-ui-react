module.exports = ({file, options, env}) => ({
	plugins: {
		'postcss-import': {},
		'postcss-svg': {},
		'postcss-cssnext': options.cssnext ? {} : false,
		'postcss-url': {
			url: 'inline',
			// maxSize: 8.192,
			ignoreFragmentWarning: true
		},
		autoprefixer: env === 'production' ? {} : false,
		// stylelint: env === 'production'
		//   ? false
		//   : {
		//     extends: ['stylelint-config-standard'],
		//     rules: {
		//       indentation: 'tab'
		//     }
		// },
		'postcss-browser-reporter': {},
		'postcss-reporter': {}
	}
})
