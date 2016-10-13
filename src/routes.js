import App from './containers/app';
import GroupsMain from './pages/groupsMain';
import EntitiesIndex from './pages/entitiesIndex';
import React from 'react';
import { Route, IndexRoute } from 'react-router';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={GroupsMain} />
    <Route path="/groups/:uid" component = {EntitiesIndex}/>
    <Route path="/topics/:uid" component = {EntitiesIndex}/>
    <Route path="/questions/:uid" component = {EntitiesIndex}/>
  </Route>
);
