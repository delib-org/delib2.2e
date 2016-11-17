import React, {Component} from 'react';

class Thumbnail extends Component {
  render() {
    return (
      <div className = "entity-grid-thumbnail">
        <i className="col s12 entity-grid-avatar large material-icons circle center-align light-blue-bg dark-blue-in">group</i>
        <span className="col s12 center-align">{this.props.entityName}</span>
      </div>
    )
  }
}

export default Thumbnail;
