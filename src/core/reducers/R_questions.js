import initialState from './initialState';
import {
  UPDATE_QUESTION,
  CLEAN_QUESTIONS
 } from '../../constants';

export default function(state = initialState.questions, action) {
  switch(action.type) {
    case UPDATE_QUESTION:
      return {...state, ...action.payload};
    case CLEAN_QUESTIONS:
      return {};
    default:
      return state;
  }
}
