import React from 'react';
import { PlanetHomePage } from '../../components/PlanetHomePage';
import { shallow } from 'enzyme';
import { PlanetListData } from '../planetListData';

test('should render PlanetHomePage correctly', () => {
    const wrapper = shallow(<PlanetHomePage/>);
    expect(wrapper).toMatchSnapshot();
});