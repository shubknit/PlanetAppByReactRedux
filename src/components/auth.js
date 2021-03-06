import React from 'react';
import { Component } from 'react';  
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';

export default function (ComposedComponent) {
    class Authenticate extends Component {
        componentDidMount() {
            this._checkAndRedirect();
        }  

        componentDidUpdate() {
          this._checkAndRedirect();
        }

        _checkAndRedirect() {
            const { isAuthenticated, redirect} = this.props;
            if(!isAuthenticated){
                this.props.history.push('/login');
            }
        }
        render() {
            return(
                <div>
                    { this.props.isAuthenticated ? <ComposedComponent {...this.props} /> : null }
                </div>
            )
        }
    }
    const mapStateToProps  = (state) => {
        return {
            isAuthenticated: state.user.isAuthenticated
        }
    }

    return connect(mapStateToProps)(Authenticate)
}

