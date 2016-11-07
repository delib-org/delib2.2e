import App from './containers/CNT_app';
import EntitiesIndex from './views/pages/P_entitiesIndex';
import ChatRoom from './views/pages/P_chatRoom';
import React from 'react';
import { Route, IndexRoute } from 'react-router';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={EntitiesIndex} />
    <Route path="/groups/:uid" component = {EntitiesIndex}/>
    <Route path="/questions/:uid" component = {EntitiesIndex}/>
    <Route path="/chat" component = {ChatRoom}/>
  </Route>
);
