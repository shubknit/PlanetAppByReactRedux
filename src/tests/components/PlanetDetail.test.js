import React from 'react';
import { PlanetDetail } from '../../components/PlanetDetail';
import { shallow } from 'enzyme';
import { PlanetListData } from '../planetListData';

test('should render PlanetDetail correctly', () => {
	const data ={
			params: {
				id: '1'
			}

	}
	const wrapper = shallow(<PlanetDetail planetList = {PlanetListData} match = {data}/>);
	expect(wrapper).toMatchSnapshot();
});