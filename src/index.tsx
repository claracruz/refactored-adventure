import React from 'react';
import { render } from 'react-dom';
import App from './containers/App/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import './index.css';

const loggerMiddleware = createLogger();

// mount it on the Store
const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware,
	),
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
