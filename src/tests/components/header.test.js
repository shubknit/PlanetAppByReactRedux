import React from 'react';
import { PlanetHeader } from '../../components/PlanetHeader';
import { shallow } from 'enzyme';

test('should render header correctly', () => {
	const wrapper = shallow(<PlanetHeader isAuthenticated ={true}/>);
	expect(wrapper).toMatchSnapshot();
});