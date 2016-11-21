import initialState from './initialState';
import {
    FIREBASE_INIT_ALL,
    FIREBASE_LOADING,
    FIREBASE_LOADING_FINISHED
 } from '../../constants';

export default function(state = initialState.firebase, action) {
  switch(action.type) {
    case FIREBASE_INIT_ALL:
      return {
        ...state,
        ...action.payload
      };
    case FIREBASE_LOADING:
      return {
        ...state,
        type: action.payload,
        isLoading: true
      };
    case FIREBASE_LOADING_FINISHED:
      return {
        ...state,
        type: "",
        isLoading: false
      };
    default:
      return state;
  }
}