import { combineReducers } from 'redux';
import GroupsReducer from './groups';
import QuestionsReducer from './questions';
import ActiveEntityReducer from './activeEntity';
import firebaseLoadingReducer from './firebaseLoading';

const rootReducer = combineReducers({
  activeEntity: ActiveEntityReducer,
  groups: GroupsReducer,
  questions: QuestionsReducer,
  fireBaseLoading: firebaseLoadingReducer
});

export default rootReducer;
