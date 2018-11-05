import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from 'react-icons/lib/fa/home';
import { connect } from 'react-redux';
import { endUserLogin } from '../actions/login';

export const PlanetHeader = (props) => {
	const logoutHandler = () => {
		props.logoutUser();
	}

    return (
        <header className ="header">
		<div className ="content-container">
			<div className = 'header__content'>
				<Link to= '/user' className = 'header__title'>
					<HomeIcon/>
				</Link>
				<h1 className ='header__title'>Planet App </h1>
				{props.isAuthenticated ?
					<Link to= '/login' className = 'button button--link' onClick = {logoutHandler}>
					 Logout
					</Link> : ''
				}	
			</div>	
			
			 
		</div>
		</header>
    )
}
const mapStateToProps  = (state) => {
    return {
        isAuthenticated: state.user.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
		logoutUser : () => dispatch(endUserLogin())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetHeader);