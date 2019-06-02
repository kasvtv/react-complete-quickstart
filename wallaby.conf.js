/* eslint-disable global-require*/

module.exports = (wallabyJS) => ({
	files: [
		'src/**/*.+(js|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
		'jest.setup.js',
		'!src/**/*.test.js?(x)',
	],

	tests: [
		'src/**/*.test.js?(x)',
	],

	filesWithNoCoverageCalculated: [
		'jest.setup.js',
	],

	env: {
		type: 'node',
	},

	compilers: {
		'**/*.js?(x)': wallabyJS.compilers.babel(),
	},

	testFramework: 'jest',
});