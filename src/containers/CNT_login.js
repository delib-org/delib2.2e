import React from 'react';
import { connect } from 'react-redux';
import { login } from '../core/actions/AC_login.js';
import Login from '../views/pages/P_login.jsx'

//set loading entites state, and active entity uid as props
function mapStateToProps(state) {

    return {
        tryCount: state.login.tryCount
        , loggedIn: state.login.loggedIn
        , redirect: state.login.redirect
        , error: state.login.error
    };
}

export default connect(mapStateToProps, {
    login,
})(Login);
