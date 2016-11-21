import React, {Component, PropTypes}from "react";

class Shell extends Component {

  constructor(){
    super();
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <div className = "sub-container">
        {this.props.children}
      </div>
    );
  }
}

export default Shell;
