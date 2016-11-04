import _ from 'lodash';
import {DB} from '../../firebase/firebase';
import {
  UPDATE_ACTIVE_ENTITY,
  UPDATE_ENTITY,
  LOADING_ACTIVE_ENTITY,
  LOADING_ACTIVE_ENTITY_FINISHED,
  CLEAN_QUESTIONS,
  CLEAN_GROUPS
  } from '../../constants';

import {firebaseLoading, firebaseLoadingFinished} from './AC_firebaseLoading';


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
    dispatch(firebaseLoading("ACTIVE_ENTITY"));
    DB.child(entityType).child(entityUid).on("value", (snapshot) => {
      let activeEntity = snapshot.val();
      let subEntitiesArray = _.values(
        _.mapKeys(activeEntity.subEntities, function(value, key) { value.uid = key; return key; })
      );
      activeEntity.subEntities = _.sortBy(subEntitiesArray, (o)=>o.dateAdded);
      activeEntity.uid = entityUid;

      dispatch(updateActiveEntity(activeEntity));
      dispatch(firebaseLoadingFinished());
    });
  }
}

export function listenToEntitesByList(entities) {
  return (dispatch) => {
    if(entities.length != 0)
      dispatch(firebaseLoading("SUB_ENTITIES"));
    entities.forEach(({entityType, uid}) => {
      DB.child(entityType).child(uid).on("value", (snapshot) => {
        if(snapshot.val()) {
          dispatch(updateEntity(entityType, uid, {[uid]: snapshot.val()}))
        }
        dispatch(firebaseLoadingFinished());
      });
    });
  }
}

export function stopListenToEntitiesByList(entities) {
  return (dispatch) => {
    entities.forEach(({entityType, uid}) => {
      DB.child(entityType).child(uid).off('value');
    });
  }
}

export function clearAllEntities() {
  return (dispatch) => {
    dispatch({
      type: CLEAN_GROUPS
    });
    dispatch({
      type: CLEAN_QUESTIONS
    });
  }
}
