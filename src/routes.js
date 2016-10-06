import App from './containers/app';
import GroupsMain from './pages/groupsMain';
import EntitiesIndex from './pages/entitiesIndex';
import React from 'react';
import { Route, IndexRoute } from 'react-router';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={GroupsMain} />
    <Route path="/group/:uid" component = {EntitiesIndex}/>
    <Route path="/topic/:uid" component = {EntitiesIndex}/>
    <Route path="/question/:uid" component = {EntitiesIndex}/>
  </Route>
);
