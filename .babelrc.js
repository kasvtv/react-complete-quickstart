const coreJsVersion = require('core-js/package.json').version;

module.exports = {
	presets: [
		['@babel/preset-env', {
			targets: "last 2 versions and >0.5%, not op_mini all", // https://browserl.ist/?q=last+2+versions+and+%3E0.5%25%2C+not+op_mini+all
			useBuiltIns: 'usage',
			corejs: coreJsVersion
		}],
		'@babel/preset-react'
	],
	plugins: [
		'@babel/plugin-proposal-class-properties'
	]
}