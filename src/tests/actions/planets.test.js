import { setPlanets } from '../../actions/planets';


test('should setup set expense action object', () => {
	const planetData = {
		name: 'planet',
		population: 100
	}
	const result = setPlanets(planetData);
	expect(result).toEqual({
		type: 'SET_PLANETS',
		planets: {
			...planetData
		}
	})
})