import initialState from './initialState';
import {
  FETCH_QUESTIONS,
  LOADING_QUESTIONS,
  FETCH_QUESTIONS_SUCCESS
 } from '../constants';

export default function(state = initialState.questions, action) {
  switch(action.type) {
    case FETCH_QUESTIONS:
    // before returning for to the  global state, set uid for each entity
      const allQuestions = _.mapKeys(action.payload, (question, uid) => {
        question.uid = uid;
        question.entityType = "question";
        return uid;
      });
      return {...state, allQuestions };
    case LOADING_QUESTIONS:
      return {...state, loading: true};
    case FETCH_QUESTIONS_SUCCESS:
      return {...state, loading: false};
    default:
      return state;
  }
}
