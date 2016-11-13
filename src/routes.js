import App from './containers/CNT_app';
import EntitiesIndex from './views/pages/P_entitiesIndex';
import Login from './containers/CNT_login';
import React from 'react';
import { Route, IndexRoute } from 'react-router';


export default (
  <Route path="/" component={App}>
        <Route path="/login" component = {Login}/>
        <IndexRoute component={EntitiesIndex} />
        <Route path="/groups/:uid" component = {EntitiesIndex}/>
        <Route path="/questions/:uid" component = {EntitiesIndex}/>
  </Route>
);
