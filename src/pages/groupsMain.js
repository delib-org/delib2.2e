import React from 'react';
import EntityList from '../containers/entityList';
import FooterNavBar from '../components/footerNavBar';


export default (props) => {
    return (
      <div className = "sub-container">
        <EntityList/>
        <FooterNavBar/>
      </div>
    );
}
