import { getFilteredData } from  '../../selectors/filteredData';
import { PlanetListData } from '../planetListData';

test('should filter by text value', () => {
	const filterData = {
		text: 'r'
	}

	const result = getFilteredData(PlanetListData, filterData);
	expect(result).toEqual([PlanetListData[2], PlanetListData[0]]);
})



test('should filter by sort population', () => {
	const filterData = {
		text: '',
		sortBy: 'population'
	}

	const result = getFilteredData(PlanetListData, filterData);
	expect(result).toEqual([PlanetListData[2], PlanetListData[1], PlanetListData[0]])
})

