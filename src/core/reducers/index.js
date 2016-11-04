import { combineReducers } from 'redux';
import GroupsReducer from './R_groups';
import QuestionsReducer from './R_questions';
import ActiveEntityReducer from './R_activeEntity';
import firebaseLoadingReducer from './R_fireBaseLoading';

const rootReducer = combineReducers({
  activeEntity: ActiveEntityReducer,
  groups: GroupsReducer,
  questions: QuestionsReducer,
  firebaseLoading: firebaseLoadingReducer
});

export default rootReducer;
