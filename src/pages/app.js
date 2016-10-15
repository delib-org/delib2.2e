import React, { Component } from 'react';
import TopNavBar from '../components/topNavBar';
import Spinner from '../components/spinner';

export default class App extends Component {

  getEntityTypeFromLinkPath(props) {
    const linkPath = props.location.pathname;
    return (linkPath == "/") ? "groups" : linkPath.substr(linkPath.indexOf("/")+1, linkPath.indexOf("/-")-1);
  }

  getEntityUidFromLinkPath(props) {
    const linkPath = props.location.pathname;
    return (linkPath == "/") ? "mainpage" : props.params.uid;
  }


  componentWillMount() {
    this.props.listenToActiveEntity(this.getEntityTypeFromLinkPath(this.props), this.getEntityUidFromLinkPath(this.props));
  }

  componentWillReceiveProps(nextProps) {
    const entityUid = this.getEntityUidFromLinkPath(nextProps);
    if(entityUid != nextProps.activeEntityUid && !nextProps.isActiveEntityLoading )
      this.props.listenToActiveEntity(this.getEntityTypeFromLinkPath(nextProps), entityUid);
  }

  render() {
    return (
      <div className = "sub-container">
        <TopNavBar/>
        {this.props.isActiveEntityLoading ? <Spinner/> : this.props.children}
      </div>
    );
  }
}
