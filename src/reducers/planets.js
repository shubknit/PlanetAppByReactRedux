const planetReducerState = []

export default (state = planetReducerState, action) => {
	switch (action.type) {
		case 'SET_PLANETS':
			return action.planets

		default: 
			return state	
	}
}