import React, {Component} from 'react';

class MessagesWindow extends Component {


  // text: message.content,
  // sentBy: message.uid,
  // userName: message.userName,
  // userUid: message.userUid,
  // date: firebase.database.ServerValue.TIMESTAMP

  addLastMessage() {
    var lastMessage = this.props.chatRoomMessage;
    var messageAlign = '';

    if(lastMessage.userUid == )
      messageAlign = 'right-message-bubble';
    else
      messageAlign= 'left-message-bubble';
      messageAlign = messageAlign + "card-panel message-bubble z-depth-2";

    return(
        <div className="messages-window container-border">
          <div className ="row message-row">
            <div className="col l4 m6 s8">
              <div className={messageAlign} >
                <div className = "row">
                <span className="label col s12 left-align">
                  {lastMessage.userName}
                </span>
                </div>
                <div className = "row">
                <span className="col s12 left-align white-text">
                  {lastMessage.text}
                </span>
                </div>
                <div className = "row">
                <span className="label col s12 right-align">
                  {lastMessage.date}
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }

  ComponentWillUpdate() {
  }

  render() {
    return (
        <div>
          {this.addLastMessage()}
        </div>
    )
  }
}

export default MessagesWindow;
