import {DB} from '../firebase/firebase';
import {
  FETCH_QUESTIONS,
  LOADING_QUESTIONS,
  FETCH_QUESTIONS_SUCCESS
  } from '../constants';

const questionsRef = DB.child("questions");

export function fetchQuestions(questions) {
  return {
    type: FETCH_QUESTIONS,
    payload: questions
  }
}

export function loadingQuestions(){
  return {
    type: LOADING_QUESTIONS
  }
}

export function fetchQuestionsSuccess(){
  return {
    type: FETCH_QUESTIONS_SUCCESS
  }
}

//listen to questions changes on firebase
export function listenToQuestionsUpdates() {
  return (dispatch) => {
    dispatch(loadingQuestions());
    questionsRef.on("value", (snapshot) => {
      dispatch(fetchQuestions(snapshot.val()));
      dispatch(fetchQuestionsSuccess());
    })
  }
}
