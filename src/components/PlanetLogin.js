import React from 'react';
import { Component } from 'react';
import PlanetHeader  from './PlanetHeader';
import { connect } from 'react-redux';
import { startUserLogin, AddError,setLoadingMsg, fetchingData } from '../actions/login';

let _username, _password;

export class PlanetLogin extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        const data = {
            user: _username.value,
            password: _password.value
        }
        this.props.userLogin(data, this.props);
    }

    render() {
        return (
            <div className = 'login-page'>
                <PlanetHeader/>
                <div className ="page-header">
                <div className="content-container">
                    <div className = 'login-page'>
                            <form onSubmit = {this.submit} className = 'form'>
                                    <input type = 'text' placeholder = 'username' className ='text-input' ref = {input => _username = input}/>
                                    <input type = 'password' placeholder = 'password' className = 'text-input' ref = {input => _password = input} />
                                    <div>
                                            <button type = 'submit' className = 'button'> Login </button>
                                    </div>      
                            </form> 
                      { this.props.isFetching && <p> Loading ... </p> }  
                      { this.props.errorMsg && <p className = 'error'> {this.props.errorMsg} </p> }     
                    </div>
                </div>
                </div>
            </div>
        )

    }

}
const mapStateToProps = (state) => {
    return {
        isFetching: state.user.isFetching,
        errorMsg: state.user.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (userData, props) => dispatch(startUserLogin(userData, props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetLogin);