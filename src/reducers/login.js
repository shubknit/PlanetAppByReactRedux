const loginState = {
	isAuthenticated: false,
	error: '',
	isFetching: false
}

export default (state = loginState, action) => {
	switch (action.type) {
		case 'START_USER_LOGIN':
			return { ...state, isAuthenticated: true}

		case 'END_USER_LOGIN':
			return { ...state, isAuthenticated: false}

		case 'ADD_ERROR' :
			return {...state, error: 'wrong user'} 

		case 'GET_TODOS_REQUEST': 
			return {...state, isFetching: true }

		case 'GET_TODOS_SUCCESS':
			return {...state, isFetching: false, error: ''}

		case 'WRONG_USER_AUTH' :
			return {...state, error: 'Wrong user'}	
				
		default: 
			return state	
	}
}