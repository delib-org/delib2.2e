import { combineReducers } from 'redux';
import GroupsReducer from './R_groups';
import QuestionsReducer from './R_questions';
import ActiveEntityReducer from './R_activeEntity';
import FirebaseReducer from './R_firebase';
import LoginReducer from './R_login';
// import chatRoomReducer from './R_chatRoom';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  activeEntity: ActiveEntityReducer,
  groups: GroupsReducer,
  questions: QuestionsReducer,
  firebase: FirebaseReducer,
  login: LoginReducer,
  form: formReducer,
//chatRoom: chatRoomReducer,
});

export default rootReducer;
