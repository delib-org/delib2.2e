import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
//on logo click, we will go to the main page
export default (props) => {
    return (
          <div>
              <div id = "header-logo-mobile" className = "navbar-fixed">
                <nav className="red">
                  <div className ="nav-wrapper container">
                    <Link id="mobile-logo" className="logo center" to="/"><b>DELIB</b></Link>
                  </div>
                </nav>
              </div>
              <div className = "navbar-fixed">
                <nav id="top-nav" className="red">
                  <div className ="nav-wrapper container">
                    <Link id="non-mobile-logo" className="logo" to="/"><b>DELIB</b></Link>
                    <ul id="top-nav-items" className="right">
                      <li className="top-nav-item"><a href="#"><i className="material-icons">email</i></a></li>
                      <li className="top-nav-item"><a href="#"><i className="material-icons">favorite</i></a></li>
                      <li className="top-nav-item"><a href="#"><i className="material-icons">add_alert</i></a></li>
                      <li className="top-nav-item"><a href="#"><i className="material-icons">public</i></a></li>
                      <li className="top-nav-item"><a href="#"><i className="material-icons">timeline</i></a></li>
                      <li className="top-nav-item"><a href="#"><i className="material-icons">chat</i></a></li>
                      <li className="top-nav-item"><a href="#"><i className="material-icons">info_outline</i></a></li>
                    </ul>
                  </div>
                </nav>
              </div>
          </div>
    );
}
