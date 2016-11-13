import initialState from './initialState';
import {
    LOGIN_TRY,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGOUT_TRY,
    LOGOUT_ERROR,
    LOGOUT_SUCCESS,
} from '../../constants';

export default function(state = initialState.login, action) {


  switch(action.type) {
    case LOGIN_TRY:
      return {...state, tryCount: action.payload};
    case LOGIN_ERROR:
      return {...state, 
        loggedIn: action.payload.loggedIn
        , error: action.payload.error
      };
    case LOGIN_SUCCESS:
      return {...state,
        loggedIn: action.payload.loggedIn
        , redirect: action.payload.redirect
        , userCred: action.payload.userCred
      };
    case LOGOUT_TRY:
      return {...state, tryCount: action.payload};
    case LOGOUT_ERROR:
      return {...state, tryCount: action.payload};
    case LOGOUT_SUCCESS:
      return {...state, tryCount: action.payload};
    default:
      return state;
  }


}
