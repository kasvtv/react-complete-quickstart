import fromPairs from 'lodash/fromPairs';

export default constants => fromPairs(Object.entries(constants).map(([key, type]) => [
	key,
	payload => ({
		type,
		payload
	})
]));