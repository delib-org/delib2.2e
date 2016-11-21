import React from 'react';
import { connect } from 'react-redux';

import Shell from '../views/pages/P_shell.jsx'
import { listenToActiveEntity } from '../core/actions/AC_entities';

//set loading entites state, and active entity uid as props
function mapStateToProps(state) {
  return {
    activeEntityUid: state.activeEntity.entity.uid,
  };
}

export default connect(mapStateToProps, {
  listenToActiveEntity
})(Shell);
