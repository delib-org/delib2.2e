import { combineReducers } from 'redux';
import GroupsReducer from './groups';
import QuestionsReducer from './questions';
import ActiveEntityReducer from './activeEntity';

const rootReducer = combineReducers({
  activeEntity: ActiveEntityReducer,
  groups: GroupsReducer,
  questions: QuestionsReducer
});

export default rootReducer;
