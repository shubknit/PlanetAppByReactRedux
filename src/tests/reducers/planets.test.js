import { planetListData } from '../planetListData';
import PlanetReducer from '../../reducers/planets';


test('should set up default state', () => {
	const result = PlanetReducer(undefined, { type: '@@INIT' });
	expect(result).toEqual([]);
})

test('should set up set planet reducer', () => {
	const action = {
		type: 'SET_PLANETS',
		planets: planetListData
	}
	const result = PlanetReducer(planetListData, action)
	expect(result).toEqual(planetListData);
})

