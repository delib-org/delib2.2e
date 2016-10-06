import React, { Component } from 'react';
import GroupsMain from './groupsMain';
import TopNavBar from '../components/topNavBar';
import Spinner from '../components/spinner';

export default class App extends Component {
  componentWillMount() {
    //when this main component is about to render, start listening to all firebase data changes
    this.props.listenToEntitiesUpdates();
  }
  componentWillReceiveProps(nextProps) {
    //once the firebase data finished to loading, set the activeEntity (by the router parameter)
    const routerEntityUid = nextProps.params.uid;
    if(!nextProps.loadingEntities && this.props.activeEntityUid != routerEntityUid)
      this.props.setActiveEntity(routerEntityUid);
  }
  render() {
    return (
      <div className = "sub-container">
        <TopNavBar/>
        {this.props.loadingEntities ? <Spinner/> : this.props.children }
      </div>
    );
  }
}
