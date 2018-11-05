import FilterReducer from '../../reducers/filters';

const filterReduceState = {
	text: ''
}

test('should set up default filter values', () => {
	const result = FilterReducer(undefined, { type: '@@INIT' });
	expect(result).toEqual({
		...filterReduceState
	})

})

test('should set up filter text value', () => {
	const action = { 
	type: 'SET_TEXT_FILTER',
		text: 'text'
	}	
	const result = FilterReducer(filterReduceState, action);
	expect(result).toEqual({
		...filterReduceState,
		text: action.text
	})
})
