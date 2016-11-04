import initialState from './initialState';
import {
  FETCH_TOPICS,
  LOADING_TOPICS,
  FETCH_TOPICS_SUCCESS
 } from '../constants';

export default function(state = initialState.topics, action) {
  switch(action.type) {
    case FETCH_TOPICS:
    // before returning for to the  global state, set uid for each entity
      const allTopics = _.mapKeys(action.payload, (topic, uid) => {
        topic.uid = uid;
        topic.entityType = "topic";
        return uid;
      });
      return {...state, allTopics};
    case LOADING_TOPICS:
      return {...state, loading: true};
    case FETCH_TOPICS_SUCCESS:
      return {...state, loading: false};
    default:
      return state;
  }
}
