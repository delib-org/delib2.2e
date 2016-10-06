import initialState from './initialState';
import {
  FETCH_GROUPS,
  LOADING_GROUPS,
  FETCH_GROUPS_SUCCESS
 } from '../constants';

export default function(state = initialState.groups, action) {
  switch(action.type) {
    // before returning for to the  global state, set uid for each entity
    case FETCH_GROUPS:
      const allGroups = _.mapKeys(action.payload, (group, uid) => {
        group.uid = uid;
        group.entityType = "group";
        return uid;
      });
      return {...state, allGroups};
    case LOADING_GROUPS:
      return {...state, loading: true};
    case FETCH_GROUPS_SUCCESS:
      return {...state, loading: false};
    default:
      return state;
  }
}
