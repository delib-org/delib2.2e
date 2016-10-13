import { listenToGroupsUpdates, listenToActiveGroup } from './groups';
import { listenToTopicsUpdates } from './topics';
import { listenToQuestionsUpdates } from './questions';
import { SET_ACTIVE_ENTITY } from '../constants';
import _ from 'lodash';
import {DB} from '../firebase/firebase';
import {
  FETCH_GROUPS,
  LOADING_GROUPS,
  FETCH_GROUPS_SUCCESS,
  UPDATE_ACTIVE_ENTITY,
  UPDATE_ENTITY,
  LOADING_ACTIVE_ENTITY,
  LOADING_ACTIVE_ENTITY_FINISHED
  } from '../constants';


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

export function updateActiveEntity(payload) {
  return {
    type: UPDATE_ACTIVE_ENTITY,
    payload
  };
}

export function loadingActiveEntity() {
  return {
    type: LOADING_ACTIVE_ENTITY
  };
}

export function loadingActiveEntityFinished() {
  return {
    type: LOADING_ACTIVE_ENTITY_FINISHED
  };
}

export function updateEntity(entityType, entityUid, payload) {
  payload[entityUid].uid = entityUid;
  payload[entityUid].entityType = entityType;
  return {
    type: UPDATE_ENTITY[entityType],
    payload
  }
}

export function listenToActiveEntity(entityType, entityUid) {
  return (dispatch) => {
    dispatch(loadingActiveEntity());
    DB.child(entityType).child(entityUid).on("value", (snapshot) => {
      let activeEntity = snapshot.val();
      let subEntitiesArray = _.values(
        _.mapKeys(activeEntity.subEntities, function(value, key) { value.uid = key; return key; })
      );

      activeEntity.subEntities = _.sortBy(subEntitiesArray, (o)=>o.dateAdded);

      dispatch(updateActiveEntity(activeEntity));
      dispatch(loadingActiveEntityFinished());
    });
  }
}

export function listenToEntitesByList(entities) {
  return (dispatch) =>
    entities.forEach(({entityType, uid}) => {
      DB.child(entityType).child(uid).on("value", (snapshot) => {
        if(snapshot.val()) {
          dispatch(updateEntity(entityType, uid, {[uid]: snapshot.val()}))
        }
      });
    });
  }

export function stopListenToEntitiesByList(entities) {
  return (dispatch) => {
    entities.forEach(({entityType, uid}) => {
      DB.child(entityType).child(uid).off('value');
    });
  }
}
