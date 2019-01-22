module.exports = {
	env: {
		"browser": true,
		"es6": true,
		"commonjs": true,
		"node": true,
		"jest": true
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:import/errors"
	],
	parser: "babel-eslint",
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 10,
		ecmaFeatures: {
			impliedStrict: true,
			jsx: true
		}
	},
	plugins: [
		"react",
		"babel",
		"import"
	]
}