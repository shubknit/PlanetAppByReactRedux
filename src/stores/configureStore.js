import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import PlanetsReducer from '../reducers/planets';
import FilterReducer from '../reducers/filters';
import LoginReducer from '../reducers/login';

import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	const store = createStore(
		combineReducers({
			planetList: PlanetsReducer,
			filters: FilterReducer,
			user: LoginReducer
		}),
		composeEnhancers(applyMiddleware(thunk))
	)
	return store
}