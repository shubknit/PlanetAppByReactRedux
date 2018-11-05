import React from 'react';
import { PlanetRow } from './PlanetRow';
import { getFilteredData } from '../selectors/filteredData';
import { connect } from 'react-redux';

export const PlanetList = ({ planetData }) => {
    return (

        <div className = "content-container">
				<div className = 'list-header'>
					<div> Name</div>
					<div> Population</div>
				</div>
				<div className = 'list-body'>
					{	planetData.length ? 
						planetData.map((data,i) => 
						<PlanetRow key = {i} planetRowData = {data} order = {i}/> )
						: <div className="list-item list-item--message"><span>No planets</span></div>	
					}	
				</div>
			</div>


    )
}

const mapStateToProps = (state) => {
    return {
        planetData: getFilteredData(state.planetList, state.filters)
    }
};

export default connect(mapStateToProps)(PlanetList);