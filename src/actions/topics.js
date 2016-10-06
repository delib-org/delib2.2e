import {DB} from '../firebase/firebase';
import {
  FETCH_TOPICS,
  LOADING_TOPICS,
  FETCH_TOPICS_SUCCESS
  } from '../constants';

const topicsRef = DB.child("topics");

export function fetchTopics(topics) {
  return {
    type: FETCH_TOPICS,
    payload: topics
  }
}

export function loadingTopics(){
  return {
    type: LOADING_TOPICS
  }
}

export function fetchTopicsSuccess(){
  return {
    type: FETCH_TOPICS_SUCCESS
  }
}

//listen to topics changes on firebase
export function listenToTopicsUpdates() {
  return (dispatch) => {
    dispatch(loadingTopics());
    topicsRef.on("value", (snapshot) => {
      dispatch(fetchTopics(snapshot.val()));
      dispatch(fetchTopicsSuccess());
    })
  }
}
