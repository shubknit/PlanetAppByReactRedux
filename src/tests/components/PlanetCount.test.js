import React from 'react';
import { PlanetCount } from '../../components/PlanetCount';
import { shallow } from 'enzyme';
import { PlanetListData } from '../planetListData';

test('should render PlanetCount correctly', () => {
	const wrapper = shallow(<PlanetCount planetData = {PlanetListData}/>);
	expect(wrapper).toMatchSnapshot();
});