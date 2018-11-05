import React from 'react';
import { PageNotFound } from '../../components/PageNotFound';
import { shallow } from 'enzyme';


test('should render page not found correctly', () => {
	const wrapper = shallow(<PageNotFound/>);
	expect(wrapper).toMatchSnapshot();
});