import './env';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './ducks/rootReducer';

import Router from './Router';

import './index.css';

const extension = window.devToolsExtension ? window.devToolsExtension() : f => f;
const store = createStore(rootReducer, compose(applyMiddleware(thunk), extension));

ReactDOM.render(
	<Provider store={store}>
		<Router />
	</Provider>,
	document.getElementById('root')
);
