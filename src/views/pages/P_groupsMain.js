import React from 'react';
import EntityList from '../containers/CNT_entityList';
import FooterNavBar from '../components/CMP_footerNavBar';


export default (props) => {
    return (
      <div className = "sub-container">
        <EntityList/>
        <FooterNavBar/>
      </div>
    );
}
