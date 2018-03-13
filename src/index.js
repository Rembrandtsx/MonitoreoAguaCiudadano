import './env';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './ducks/rootReducer';

import Router from './Router';

import './index.css';

const middlewares = [thunk];
// Agregamos el logger de redux si estamos en ambiente de desarrollo:
if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

const extension = window.devToolsExtension ? window.devToolsExtension() : f => f;
export const store = createStore(rootReducer, compose(applyMiddleware(...middlewares), extension));

ReactDOM.render(
	<Provider store={store}>
		<Router />
	</Provider>,
	document.getElementById('root')
);
