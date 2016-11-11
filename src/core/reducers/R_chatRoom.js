import initialState from './initialState';
import {
    LISTEN_TO_CHATROOOM,
    SEND_MESSAGE
} from '../../constants';

export default function(state = initialState.groups, action) {
    switch(action.type) {
        case LISTEN_TO_CHATROOOM:
            return {...state, ...action.payload};
        case SEND_MESSAGE:
            return {};
        default:
            return state;
    }
}
