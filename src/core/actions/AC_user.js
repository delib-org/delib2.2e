import {  } from '../firebase';
import _ from 'lodash';
import {
    FETCH_USER
  } from '../../constants';

export function fetchUserData(user) {
  return {
    type: FETCH_USER,
    payload: user
  }
}