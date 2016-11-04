import React from 'react';
import App from '../pages/P_app'
import { connect } from 'react-redux';
import { listenToActiveEntity } from '../actions/AC_entities';

//set loading entites state, and active entity uid as props
function mapStateToProps(state) {
  return {
    firebaseLoading: state.firebaseLoading,
    activeEntityUid: state.activeEntity.entity.uid
  };
}

export default connect(mapStateToProps, {listenToActiveEntity})(App);
