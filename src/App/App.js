import React from 'react';
import styles from './App.scss';

class App extends React.Component {
	render() {
		return <>
			<h1 className={styles.red}>{'React works, yay!'}</h1>
		</>;
	}
}

export default App;