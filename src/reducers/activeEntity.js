import initialState from './initialState';
import { SET_ACTIVE_ENTITY } from '../constants';

//return the active entity that comes from the action to the state
export default function(state = initialState.activeEntity, action) {
  switch(action.type) {
    case SET_ACTIVE_ENTITY:
      return {...action.payload};
    default:
      return state;
  }
}
