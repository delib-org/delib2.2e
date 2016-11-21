import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import App from './containers/CNT_app';
import EntitiesIndex from './views/pages/P_entitiesIndex';
import Login from './containers/CNT_login';
import Shell from './containers/CNT_shell';

export default (
  <Route path="/" component={App}>
      <Route path="/login" component = {Login} />
      <Route path="/home" component = {Shell} >
            <IndexRoute component={EntitiesIndex}>
                  <Route path="/groups/:uid" component = {EntitiesIndex} />
                  <Route path="/questions/:uid" component = {EntitiesIndex} />
            </IndexRoute>
      </Route>
      <Redirect path="*" to="/" />
</Route>
);

//path="/entitiesExplorer"