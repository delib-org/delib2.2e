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

//test

import {Editor, EditorState, RichUtils} from 'draft-js';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

    _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }
    _onItalicClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  }

render() {
    return (
      <div>
        <div className="DraftEditor-toolbar">
            <button onClick={this._onBoldClick.bind(this)}>מודגש</button>
            <button onClick={this._onItalicClick.bind(this)}>נטוי</button>
        </div>
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

//test

// const createStoreWithMiddleware = applyMiddleware(ReduxThunk, promiseMiddleware)(createStore);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers(
   applyMiddleware(ReduxThunk, ReduxPromise)
 ));

ReactDOM.render(
  <Provider store={store}>
     <MyEditor />
  </Provider>
  , document.querySelector('.container'));


//Original instantiation
    //ReactDOM.render(
    //  <Provider store={createStoreWithMiddleware(reducers)}>
    //    <Router history={browserHistory} routes={routes} />
    //  </Provider>
    //  , document.querySelector('.container'));
