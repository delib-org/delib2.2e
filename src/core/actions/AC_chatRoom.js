import {
    FETCH_LAST_MESSAGE,
    MESSAGE_SENT,
    CHAT_ROOM_VOLUME
} from '../../constants';

import {DB} from '../../firebase/firebase';

export function fetchChatRoom() {
    return (dispatch, getState) => {
        var ref = DB.child("/chatRooms/" + getState().activeEntity.uid);

        if (!ref) {
            ref.child("/chatRooms/" + getState().activeEntity.uid +'entity').set({
                title: getState().activeEntity,
                entityType: getState().activeEntity.entity.title,
            });

            ref.child('messages').limitToLast(CHAT_ROOM_VOLUME).on('child_added', (message)=> {
                var messageJson = message.val();

                dispatch({
                    type: FETCH_LAST_MESSAGE,
                    payload: messageJson
                });
            });
        }
    }
}
export function sendMessage(message) {

    return (dispatch, getState) => {
        var ref = DB.child("/chatRooms/" + getState().activeEntity.uid);

        if(!ref) {
            ref.child('messages').push({
                text: message.content,
                sentBy: message.uid,
                userName: message.userName,
                userUid: message.userUid,
                date: firebase.database.ServerValue.TIMESTAMP
            });
        }

        dispatch({
            type: MESSAGE_SENT
        });

    }
}