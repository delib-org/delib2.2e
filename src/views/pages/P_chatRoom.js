import React, {Component} from 'react';
import MessagesWindow from '../components/chat/CMP_messagesWindow.js';

class chatRoom extends Component {
  render() {
    return (
      <div>
        <MessagesWindow/>
      </div>
    )
  }
}

export default chatRoom;
