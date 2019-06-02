import React from 'react';
import styles from 'App/App.scss';

import AppSvg from 'App/App.svg';

class App extends React.Component {
	state = {}

	render() {
		return (
			<>
				<h1 className={styles.red}>{'React works, yay!'}</h1>
				<img className={styles.rotate} src={AppSvg} />
			</>
		);
	}
}

export default App;