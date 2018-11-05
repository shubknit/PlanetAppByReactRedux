import React from 'react';
import { shallow } from 'enzyme';
import { PlanetLogin } from '../../components/PlanetLogin';

test('should render Planet Login correctly', () => {
    const wrapper = shallow(<PlanetLogin isFetching = {true} errorMsg = {true}/>);
    expect(wrapper).toMatchSnapshot();
});

