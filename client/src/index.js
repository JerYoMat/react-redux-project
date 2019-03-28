import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Modal from 'react-modal';
import reducer from './reducer';
import App from './App';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { loadCompanies } from './actions';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer, enhancer);
store.dispatch(loadCompanies());
Modal.setAppElement('#root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'))
