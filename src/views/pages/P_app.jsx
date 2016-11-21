import React, { Component, PropTypes } from 'react';
import TopNavBar from '../components/CMP_topNavBar';
import FooterNavBar from '../components/CMP_footerNavBar';


export default class App extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    console.log('init');
    this.props.firebaseInit();
    this.props.verifyAuth();
  }


  //check if the active entity has changed, if it did, then start listen to the new one.
  componentWillReceiveProps(nextProps) {

    if(this.props.redirect)
      this.redirectTo(this.props.redirect);

  }

  //check if firebase is currently loading an active entity
  isLoading(firebaseLoading) {
    return (firebaseLoading.isLoading);
  }

  redirectTo(route) {
    if(this.props.location.pathname !== route)
      this.context.router.push(route);
  }

  render() {
    return (
      <div>
        <TopNavBar pathname = {this.props.location.pathname}
                logout = {this.props.logout}
        />

        {this.props.children}

        <FooterNavBar pathname = {this.props.location.pathname}
        />
      </div>
    );
  }
}



// <Error error = {this.props.login.error}/>