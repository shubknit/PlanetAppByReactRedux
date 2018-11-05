import React from 'react';
import { PlanetRow } from '../../components/PlanetRow';
import { shallow } from 'enzyme';
import { PlanetListData } from '../planetListData';

test('should render PlanetRow correctly', () => {
	const wrapper = shallow(<PlanetRow planetRowData = {PlanetListData[0]}/>);
	expect(wrapper).toMatchSnapshot();
});