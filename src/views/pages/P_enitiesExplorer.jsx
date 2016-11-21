import React, {Component, PropTypes}from "react";
import Spinner from '../components/CMP_spinner';

class Shell extends Component {

  constructor(){
    super();
  }

  //return entity type by link bar path (exmple /groups/-ABCDEFG123 will return groups)
  getEntityTypeFromLinkPath(linkPath) {
    return (linkPath == "/") ? "groups" : linkPath.substr(linkPath.indexOf("/")+1, linkPath.indexOf("/-")-1);
  }

  /*gets the props (either from this.props or from nextProps) and returns the uid depends on the pathname (if its / just return default uid)
   else, take the uid from props.params*/
  getEntityUidFromLinkPath(props) {
    // change
    const linkPath = props.location.pathname;
    if (props.params)
      return (linkPath == "/") ? "mainpage" : props.params.uid;
    else
      return null;
  }

  //on initial mount, listen to the active entity by link bar
  componentWillMount() {
    const entityUid = this.getEntityUidFromLinkPath(this.props);

    if(entityUid != this.props.activeEntityUid && !this.isLoading(this.props))
      this.props.listenToActiveEntity(this.getEntityTypeFromLinkPath(this.props.location.pathname), entityUid);
  }

  //check if the active entity has changed, if it did, then start listen to the new one.
  componentWillReceiveProps(nextProps) {
    const entityUid = this.getEntityUidFromLinkPath(nextProps);

    if(entityUid != nextProps.activeEntityUid && !this.isLoading(nextProps))
      this.props.listenToActiveEntity(this.getEntityTypeFromLinkPath(nextProps.location.pathname), entityUid);
  }

  render() {
    return (
      <div className = "sub-container">
        {this.isLoading(this.props) ? <Spinner/> : this.props.children}

      </div>
    );
  }
}

export default Shell;
