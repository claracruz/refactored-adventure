import React from 'react';
import { render } from 'react-dom';
import App from './containers/App/index';
import { Provider } from 'react-redux';
// import { store } from './stores/thunkStore/';
import { store } from './stores/sagaStore';
import './index.css';

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
