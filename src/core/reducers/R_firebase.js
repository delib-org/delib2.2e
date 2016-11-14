import initialState from './initialState';
import {
    FIREBASE_INIT_ALL
 } from '../../constants';

export default function(state = initialState.firebase, action) {
  switch(action.type) {
    case FIREBASE_INIT_ALL:
      return action.payload;
    default:
      return state;
  }
}
