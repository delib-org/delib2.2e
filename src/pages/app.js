import React, { Component } from 'react';
import TopNavBar from '../components/topNavBar';
import Spinner from '../components/spinner';


export default class App extends Component {
  //return entity type by link bar path (exmple /groups/-ABCDEFG123 will return groups)
  getEntityTypeFromLinkPath(linkPath) {
    const entityType =  linkPath.substr(linkPath.indexOf("/")+1, linkPath.indexOf("/-")-1);
    return (entityType == "") ? "groups" : entityType;
  }

  //check if firebase is currently loading an active entity
  isActiveEntityLoading(firebaseLoading) {
    return (firebaseLoading.type == "ACTIVE_ENTITY" && firebaseLoading.isLoading);
  }
  //on initial mount, listen to the active entity by link bar
  componentWillMount() {
    const entityUid = (this.props.params.uid) ? this.props.params.uid : "mainpage";
    this.props.listenToActiveEntity(this.getEntityTypeFromLinkPath(this.props.location.pathname), entityUid);
  }

  //check if the active entity has changed, if it did, then start listen to the new one.
  componentWillReceiveProps(nextProps) {
    const entityUid = (nextProps.params.uid) ? nextProps.params.uid : "mainpage";
    if(entityUid != nextProps.activeEntityUid && !this.isActiveEntityLoading(nextProps.firebaseLoading))
      this.props.listenToActiveEntity(this.getEntityTypeFromLinkPath(nextProps.location.pathname), entityUid);
  }

  render() {
    return (
      <div className = "sub-container">
        <TopNavBar/>
        {this.isActiveEntityLoading(this.props.firebaseLoading) ? <Spinner/> : this.props.children}
      </div>
    );
  }
}
