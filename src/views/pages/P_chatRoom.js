import React, {Component} from 'react';
import MessagesWindow from '../components/chat/CMP_messagesWindow.js';
import NewMessageInput from '../components/chat/CMP_newMessageInput.js';


class chatRoom extends Component {

    componentWillMount() {
        this.props.fetchChatRoom();
    }

    render() {
    return (
      <div className = "sub-container">
        <MessagesWindow chatRoomMessage = {this.props.chatRoomMessage}/>
        <NewMessageInput sendMessage = {this.props.sendMessage}/>
      </div>
    )
    }
}

export default chatRoom;
