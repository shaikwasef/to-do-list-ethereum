import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import {allReducers} from './reducers/index'
import { Provider } from 'react-redux';
import { StylesProvider } from '@material-ui/core';

const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <StylesProvider injectFirst>
      <App />
    </StylesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

