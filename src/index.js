import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import App from './pages/app';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
