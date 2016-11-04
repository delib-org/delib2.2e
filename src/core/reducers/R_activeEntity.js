import initialState from './initialState';
import { UPDATE_ACTIVE_ENTITY,
         LOADING_ACTIVE_ENTITY,
         LOADING_ACTIVE_ENTITY_FINISHED} from '../../constants';

//return the active entity that comes from the action to the state
export default function(state = initialState.activeEntity, action) {
  switch(action.type) {
    case UPDATE_ACTIVE_ENTITY:
      return {...state, entity: action.payload};
    case LOADING_ACTIVE_ENTITY:
      return {...state, isLoading: true};
    case LOADING_ACTIVE_ENTITY_FINISHED:
      return {...state, isLoading: false};
    default:
      return state;
  }
}
