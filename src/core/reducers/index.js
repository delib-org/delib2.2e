import { combineReducers } from 'redux';
import GroupsReducer from './R_groups';
import QuestionsReducer from './R_questions';
import ActiveEntityReducer from './R_activeEntity';
import firebaseLoadingReducer from './R_fireBaseLoading';
import chatRoomReducer from './R_chatRoom';

const rootReducer = combineReducers({
  activeEntity: ActiveEntityReducer,
  groups: GroupsReducer,
  questions: QuestionsReducer,
  firebaseLoading: firebaseLoadingReducer,
  chatRoom: chatRoomReducer
});

export default rootReducer;
