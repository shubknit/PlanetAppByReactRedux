import React from 'react';
import { shallow } from 'enzyme';
import { PlanetList } from '../../components/PlanetList';
import { PlanetListData } from '../planetListData';

test('should render expense list correctly', () => {
	const wrapper = shallow(<PlanetList planetData = {PlanetListData}/>);
	expect(wrapper).toMatchSnapshot();
});

