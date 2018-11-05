import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import { AppRouter } from './routers/AppRouter';
import { startSetPlanets } from './actions/planets'
 
const store = configureStore();

const jsx = (
		<Provider store = {store}>
			<AppRouter/>
		</Provider>
	)
store.subscribe(() => {
	const state = store.getState();
})
ReactDOM.render(jsx, document.getElementById('app'));






