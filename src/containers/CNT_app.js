import React from 'react';
import { connect } from 'react-redux';

import App from '../views/pages/P_app.jsx'
import { firebaseInit } from '../core/actions/AC_firebase.js';
import { logout, verifyAuth } from '../core/actions/AC_login.js';

//set loading entites state, and active entity uid as props
function mapStateToProps(state) {
  console.log(state.app);
    return {
      ...state.app
  };
}

export default connect(mapStateToProps, {
    firebaseInit,
    verifyAuth,
    logout
})(App);
