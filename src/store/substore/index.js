import constantsToActions from 'store/constantsToActions.js';

export const path = 'substore';

const constants = {
	toggle: 'SUBSTORE:TOGGLE',
};
export const actions = constantsToActions(constants);

const initialState = {
	toggled: false,
};

const reducer = (state=initialState, {type, payload}) =>
	type === constants.toggle ? {
		...state,
		toggled: payload !== undefined ? payload : !state.toggled
	} :
	state;


export const selectToggled = state => state[path].toggled;

export default reducer;