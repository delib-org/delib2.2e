import initialState from './initialState';
import {
  LOGIN_TRY,
  REDIRECT,
  REDIRECTED,
} from '../../constants';

export default function(state = initialState.login, action) {
  switch(action.type) {
    case LOGIN_TRY:
      return {
        ...state,
        tryCount: action.payload
      };
    case REDIRECT:
      return {...state,
        loggedIn: action.payload.loggedIn,
        redirect: action.payload.redirect,
        userCred: action.payload.userCred
      };
    case REDIRECTED:
      return {
        ...state,
        redirect: action.payload.redirect
      };
    default:
      return state;
  }
}
