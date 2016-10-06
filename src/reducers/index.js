import { combineReducers } from 'redux';
import GroupsReducer from './groups';
import TopicsReducer from './topics';
import QuestionsReducer from './questions';
import ActiveEntityReducer from './activeEntity';

const rootReducer = combineReducers({
  activeEntity: ActiveEntityReducer,
  groups: GroupsReducer,
  topics: TopicsReducer,
  questions: QuestionsReducer
});

export default rootReducer;
