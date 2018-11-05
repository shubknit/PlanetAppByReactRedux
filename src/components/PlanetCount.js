import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFilteredData } from '../selectors/filteredData';

export const PlanetCount = ({ planetData }) => (
    <div className ="page-header">
		<div className = 'content-container'>
			<h1 className = "page-header__title"> Viewing { planetData.length } Planets </h1>
		</div>
	</div>
)

const mapStateToProps = (state) => {
    return {
        planetData: getFilteredData(state.planetList, state.filters)
    }
};

export default connect(mapStateToProps)(PlanetCount);