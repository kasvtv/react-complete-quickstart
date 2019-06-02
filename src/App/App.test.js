import React from 'react';
import { shallow } from 'enzyme';
import App from 'App/App.js';
import AppStyles from 'App/App.scss';

describe('Testing App', () => {
	it('renders', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('h1').hasClass(AppStyles.red)).toBe(true);
	});
});