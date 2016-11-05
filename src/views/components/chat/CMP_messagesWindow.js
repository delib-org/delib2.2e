import React, {Component} from 'react';

class MessagesWindow extends Component {
  render() {
    return (
      <div>
        <div className ="row">
          <div className="col s4">
            <div className="card-panel red lighten-5 z-depth-1">
              <span className="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span>
            </div>
          </div>
        </div>
        <div className ="row">
          <div className="col s4">
            <div className="card-panel red lighten-5 z-depth-1">
              <span className="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span>
            </div>
          </div>
        </div>
        <div className ="row">
          <div className="col s4">
            <div className="card-panel red lighten-5 z-depth-1">
              <span className="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span>
            </div>
          </div>
        </div>
    
        <div className ="row">
          <div className="col s4 push-s8">
            <div className="card-panel red lighten-5 z-depth-1">
              <span className="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MessagesWindow;
