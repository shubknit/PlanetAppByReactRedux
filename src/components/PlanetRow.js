import React from 'react';
import { Link } from 'react-router-dom';

export const PlanetRow = (props) => {
	const { planetRowData } = props,
	 linkStyle = {
		fontSize: 30 - props.order * 2
	}
	return(
			<Link to = {`planet-detail/${planetRowData.id}`} className = 'list-item'
		    style = {linkStyle}>		
				<div className = "col-1">
					{ planetRowData.name } 
			    </div>	
				<div className = "list">
					{ planetRowData.population }
				</div>
			</Link>	
	)
}	