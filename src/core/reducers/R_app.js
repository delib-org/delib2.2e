import { combineReducers } from 'redux';
import FirebaseReducer from './R_firebase.js';
import LoginReducer from './R_login.js';

export default combineReducers({
    firebase: FirebaseReducer,
    login: LoginReducer
})