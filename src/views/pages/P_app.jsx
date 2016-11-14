import React, { Component } from 'react';
import TopNavBar from '../components/CMP_topNavBar';
import Spinner from '../components/CMP_spinner';


export default class App extends Component {
  //return entity type by link bar path (exmple /groups/-ABCDEFG123 will return groups)
  getEntityTypeFromLinkPath(linkPath) {
    return (linkPath == "/") ? "groups" : linkPath.substr(linkPath.indexOf("/")+1, linkPath.indexOf("/-")-1);
  }

  /*gets the props (either from this.props or from nextProps) and returns the uid depends on the pathname (if its / just return default uid)
    else, take the uid from props.params*/
  getEntityUidFromLinkPath(props) {
    const linkPath = props.location.pathname;
    return (linkPath == "/") ? "mainpage" : props.params.uid;
  }

  //check if firebase is currently loading an active entity
  isActiveEntityLoading(firebaseLoading) {
    return (firebaseLoading.type == "ACTIVE_ENTITY" && firebaseLoading.isLoading);
  }

  //on initial mount, listen to the active entity by link bar
  componentWillMount() {
    this.props.listenToActiveEntity(this.getEntityTypeFromLinkPath(this.props.location.pathname), this.getEntityUidFromLinkPath(this.props));
  }

  //check if the active entity has changed, if it did, then start listen to the new one.
  componentWillReceiveProps(nextProps) {
    const entityUid = this.getEntityUidFromLinkPath(nextProps);
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
