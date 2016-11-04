import React from 'react';
import App from '../views/pages/P_app'
import { connect } from 'react-redux';
import { listenToActiveEntity } from '../core/actions/AC_entities';

//set loading entites state, and active entity uid as props
function mapStateToProps(state) {
  return {
    firebaseLoading: state.firebaseLoading,
    activeEntityUid: state.activeEntity.entity.uid
  };
}

export default connect(mapStateToProps, {listenToActiveEntity})(App);
