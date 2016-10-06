import React from 'react';
import App from '../pages/app'
import loadingEntitiesSelector from '../selectors/loadingEntitiesSelector';
import { connect } from 'react-redux';
import { listenToEntitiesUpdates, setActiveEntity } from '../actions/entities'

//set loading entites state, and active entity uid as props
function mapStateToProps(state) {
  return {
    loadingEntities: loadingEntitiesSelector(state),
    activeEntityUid: state.activeEntity.uid
  };
}

export default connect(mapStateToProps, {listenToEntitiesUpdates, setActiveEntity})(App);
