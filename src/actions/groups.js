import {DB} from '../firebase/firebase';
import {
  FETCH_GROUPS,
  LOADING_GROUPS,
  FETCH_GROUPS_SUCCESS
  } from '../constants';

const groupsRef = DB.child("groups");

export function fetchGroups(groups) {
  return {
    type: FETCH_GROUPS,
    payload: groups
  }
}

export function loadingGroups(){
  return {
    type: LOADING_GROUPS
  }
}

export function fetchGroupsSuccess(){
  return {
    type: FETCH_GROUPS_SUCCESS
  }
}

//listen to groups changes on firebase
export function listenToGroupsUpdates() {
  return (dispatch) => {
    dispatch(loadingGroups());
    groupsRef.on("value", (snapshot) => {
      dispatch(fetchGroups(snapshot.val()));
      dispatch(fetchGroupsSuccess());
    })
  }
}
