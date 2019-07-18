import React from 'react';
import { connect } from 'react-redux'

import styles from 'components/App/App.scss';

import { actions, selectToggled } from 'store/substore';

function App({toggled, toggle}) {
	return (
		<>
			<h1 className={toggled ? styles.red : styles.blue}>{'React works, yay!'}</h1>
			<button type="button" onClick={() => toggle()}>Toggle!</button>
		</>
	);
}

export default connect(
	state => ({
		toggled: selectToggled(state)
	}),
	{
		toggle: actions.toggle
	}
)(App);