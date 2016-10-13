import React from 'react';
import App from '../pages/app'
import { connect } from 'react-redux';
import { listenToEntitiesUpdates, listenToActiveEntity } from '../actions/entities'

//set loading entites state, and active entity uid as props
function mapStateToProps(state) {
  return {
    isActiveEntityLoading: state.activeEntity.isLoading
  };
}

export default connect(mapStateToProps, {listenToActiveEntity})(App);
