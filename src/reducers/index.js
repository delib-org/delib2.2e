import { combineReducers } from 'redux';
import GroupsReducer from './groups';
import QuestionsReducer from './questions';
import ActiveEntityReducer from './activeEntity';
import FirebaseLoadingReducer from './firebaseLoading';

const rootReducer = combineReducers({
  activeEntity: ActiveEntityReducer,
  groups: GroupsReducer,
  questions: QuestionsReducer,
  firebaseLoading: firebaseLoadingReducer
});

export default rootReducer;
