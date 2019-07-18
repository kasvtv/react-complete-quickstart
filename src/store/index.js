import {
	createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';

import substore, { path as substorePath } from './substore';

const middleware = [
	thunk,
];

let composeEnhancers = compose;
if (process.env.NODE_ENV === 'development') {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;
}

const store = createStore(
	combineReducers({
		[substorePath]: substore,
	}),
	composeEnhancers(applyMiddleware(...middleware))
);


export default store;

window.store = store;