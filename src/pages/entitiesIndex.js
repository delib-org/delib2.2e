import React from 'react';
import EntityList from '../containers/entityList';
import FooterNavBar from '../components/footerNavBar';

//will contain a different footer nav
export default (props) => {
    return (
      <div className = "sub-container">
        <EntityList />
        <FooterNavBar/>
      </div>
    );
}
