import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import routes from './components/routes';

let store = createStore(
	combineReducers({
		routing: routerReducer
	})
);

const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={ store }>
		<Router routes={ routes } history={ history } />
	</Provider>,
	document.getElementById('app')
);
