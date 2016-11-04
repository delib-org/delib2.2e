import initialState from './initialState';
import {
  FIREBASE_LOADING,
  FIREBASE_LOADING_FINISHED
 } from '../../constants';

export default function(state = initialState.firebaseLoading, action) {
  switch(action.type) {
    case FIREBASE_LOADING:
      return {
        type: action.payload,
        isLoading: true
      };
    case FIREBASE_LOADING_FINISHED:
      return {
        type: "",
        isLoading: false
      }
    default:
      return state;
  }
}
