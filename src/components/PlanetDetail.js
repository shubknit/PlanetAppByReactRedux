import React from 'react';
import PlanetHeader  from './PlanetHeader';
import { connect }  from 'react-redux';

export const PlanetDetail = (props) => {

	const id = props.match.params.id,
	 [planetData] = props.planetList.filter(item => item.id == id);
	
	return(
		<div className ="heading">
			<PlanetHeader/>
			<div className = 'page-header'>
				<div className = 'content-container'>	
					<h1 className ='page-header__title'>Planet {planetData.name} Detail  </h1> 
				</div>
			</div>
			<div className = 'content-container'>
				<div className = 'list-header'>
					<div> Rotation Period</div>
					<div> Orbital Period</div>
					<div> Diameter</div>
					<div> Population</div>
				</div>
				<div className = 'list-body'>
					<div className = 'list-item'>
						<div> {planetData.rotation_period} </div>
						<div> {planetData.orbital_period} </div>
						<div> {planetData.diameter} </div>
						<div> {planetData.population} </div>
					</div>
				</div>	
			</div>	
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		planetList: state.planetList
	}
}

export default connect(mapStateToProps)(PlanetDetail);