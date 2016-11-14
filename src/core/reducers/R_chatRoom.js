import initialState from './initialState';
import {
    FETCH_LAST_MESSAGE,
    SEND_MESSAGE
} from '../../constants.js';

export default function(state = initialState.chatRoom, action) {
    switch(action.type) {
        case FETCH_LAST_MESSAGE:
            return {...state, ...action.payload};
        case SEND_MESSAGE:
            return {...state};
        default:
            return state;
    }
}
