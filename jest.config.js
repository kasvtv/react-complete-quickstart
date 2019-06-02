module.exports = {
	setupFilesAfterEnv: [
		'./jest.setup.js',
	],
	moduleDirectories: ['.', 'node_modules'],
	moduleNameMapper: {
		'\\.(css|scss|sass|less)$': 'identity-obj-proxy',
	},
	transform: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': './jest.setup.js',
		'^.+\\.(js|ts)x?$': 'babel-jest',
	},
};