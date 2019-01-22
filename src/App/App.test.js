import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import AppStyles from './App.scss';

describe('Testing App', () => {
	it('renders', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('h1').hasClass(AppStyles.red)).toBe(true);
	})
});