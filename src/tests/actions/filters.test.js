import { SetTextFilter }
 from '../../actions/filters';

test('should setup set text filter action object', () => {
	const text = 'Something typed in';
	const result = SetTextFilter(text);
	expect(result).toEqual({
		type: 'SET_TEXT_FILTER',
		text
	})
})

test('should setup set text filter action object without data', () => {
	const result = SetTextFilter('');
	expect(result).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''
	})
})
