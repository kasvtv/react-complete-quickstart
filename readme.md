# Webpack/React starter kit

I don't really like `create-react-app` too much, it is very large and contains a lot of things you don't need, if you ever decide to eject from it later you end up with quite the monstrosity. I prefer minimalistic setups instead. I personally always start off with this configuration every time I start a React project. It offers my idea of the best balance between minimalism and complete configuration.

Installed tooling:
* Webpack 4
* Babel 7
* CSS modules with SASS parsing
* index.html generation
* React.js
* ESLint
* Jest (with file mocks for stylesheets and other files)
* Enzyme

(Preconfigured to work with WallabyJS and Quokka.js in case your editor loads either of them)

## Usage:

Install packages:

	npm i

Run dev server with auto reload:

	npm run dev

Run production build:

	yarn build
	
Run development build with auto reload:

	npm run watch
	
Run all jest tests:

	npm run test
	
Analyze bundle size:

	npm run analyze