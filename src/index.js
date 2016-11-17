import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import App from './views/pages/P_app';
import reducers from './core/reducers';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

// const createStoreWithMiddleware = applyMiddleware(ReduxThunk, promiseMiddleware)(createStore);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers(
   applyMiddleware(ReduxThunk, ReduxPromise)
 ));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
