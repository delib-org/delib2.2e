import React, {Component} from 'react';
import MessagesWindow from '../components/chat/CMP_messagesWindow.js';
import NewMessageInput from '../components/chat/CMP_newMessageInput.js';

class chatRoom extends Component {
  render() {
    return (
      <div className = "sub-container">
        <MessagesWindow/>
        <NewMessageInput/>
      </div>
    )
  }
}

export default chatRoom;
