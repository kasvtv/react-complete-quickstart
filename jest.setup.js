const path = require('path');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

// imported by jest.config.js for tranforming file imports to their path
module.exports = {
	process(src, filename) {
		return 'module.exports = ' + JSON.stringify(path.relative(__dirname, filename)) + ';';
	},
};