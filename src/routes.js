import App from './containers/app';
import EntitiesIndex from './pages/entitiesIndex';
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import animationList from './components/animationtest';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={EntitiesIndex} />
    <Route path="/groups/:uid" component = {EntitiesIndex}/>
    <Route path="/questions/:uid" component = {EntitiesIndex}/>
    <Route path="/animationlist" component = {animationList}/>
  </Route>
);
