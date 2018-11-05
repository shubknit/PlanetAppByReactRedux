const filterReducerState = {
	text: ''
}

export default (state = filterReducerState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return { ...state, text: action.text}

		default: 
			return state	
	}
}