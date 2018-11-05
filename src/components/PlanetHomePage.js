import React from 'react';
import { Component } from 'react';
import PlanetHeader  from './PlanetHeader';
import PlanetFilters  from './PlanetFilters';
import  PlanetList  from './PlanetList';
import  PlanetCount from './PlanetCount';
import { Redirect } from 'react-router';

export class PlanetHomePage extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className = 'home-page'>
				<div>
                    <PlanetHeader/> 
                    <PlanetCount/>
                    <div className="content-container">
                        <PlanetFilters/>
                        <PlanetList/>
                    </div>
                    </div>

			</div>
        )

    }
}

