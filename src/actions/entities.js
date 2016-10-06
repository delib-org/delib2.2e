import { listenToGroupsUpdates } from './groups';
import { listenToTopicsUpdates } from './topics';
import { listenToQuestionsUpdates } from './questions';
import { SET_ACTIVE_ENTITY } from '../constants';
import _ from 'lodash';

//Start listen to all entities changes.
export function listenToEntitiesUpdates() {
  return (dispatch) => {
    dispatch(listenToGroupsUpdates());
    dispatch(listenToTopicsUpdates());
    dispatch(listenToQuestionsUpdates());
  }
}

// set active entity by uid (comes from router)
export function setActiveEntity(entityUid) {
  return (dispatch, getState) => {
    const allEntities = {
      ...getState().groups.allGroups,
      ...getState().topics.allTopics,
      ...getState().questions.allQuestions
    };


    dispatch( {
      type: SET_ACTIVE_ENTITY,
      payload: !allEntities[entityUid] ? {uid:""} : allEntities[entityUid] //if uid is ud, just put active entity with uid ""
    });
  }
}
