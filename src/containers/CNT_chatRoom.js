import ChatRoom from '../views/pages/P_chatRoom';
import { fetchChatRoom, sendMessage } from '../core/actions/AC_chatRoom';
import { connect } from 'react-redux';

//set all sub entites of the active entity as props, also set active entity as props
function mapStateToProps(state) {
    return {
        chatRoomMessage: state.chatRoom
    };
}

export default connect(mapStateToProps, {sendMessage, fetchChatRoom})(ChatRoom);
