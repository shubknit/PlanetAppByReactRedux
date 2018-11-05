import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import  PlanetLogin  from '../components/PlanetLogin';
import { PlanetHomePage } from '../components/PlanetHomePage';
import { PageNotFound } from '../components/PageNotFound';
import  PlanetDetail  from '../components/PlanetDetail';
import '../styles/index.scss';
import auth from '../components/auth';

export const AppRouter = () => (
	<BrowserRouter>
		<Switch>
				<Route path = '/' component = { PlanetLogin } exact/>
				<Route path = '/login' component = { PlanetLogin }/>
				<Route path = '/user' component = {auth(PlanetHomePage)}/>
			    <Route path = '/planet-detail/:id' component = {auth(PlanetDetail)}/>			
				<Route path = '*' component={PageNotFound} />
		</Switch>
	</BrowserRouter>
)

