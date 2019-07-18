import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App/App.js';
import AppStyles from 'components/App/App.scss';

describe('Testing App', () => {
	it('renders', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('h1').hasClass(AppStyles.red)).toBe(true);
	});
});