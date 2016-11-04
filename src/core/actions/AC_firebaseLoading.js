import _ from 'lodash';
import {
  FIREBASE_LOADING,
  FIREBASE_LOADING_FINISHED
  } from '../constants';


export function firebaseLoading(loadingType) {
  return {
    type: FIREBASE_LOADING,
    payload: loadingType
  }
}

export function firebaseLoadingFinished() {
  return {
    type: FIREBASE_LOADING_FINISHED
  }
}
