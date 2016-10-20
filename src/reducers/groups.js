import initialState from './initialState';
import {
  UPDATE_GROUP,
  CLEAN_GROUPS
 } from '../constants';

export default function(state = initialState.groups, action) {
  switch(action.type) {
    case UPDATE_GROUP:
      return {...state, ...action.payload};
    case CLEAN_GROUPS:
      return {};
    default:
      return state;
  }
}
