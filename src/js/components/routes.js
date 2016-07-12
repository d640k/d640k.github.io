import React from 'react';
import { Route, IndexRoute } from 'react-router';
import DKAppContainer from './DKAppContainer';
import DKHome from './DKHome';
import DKEntry from './DKEntry';

module.exports = (
	<Route path="/" component={ DKAppContainer }>
		<IndexRoute component={ DKHome } />
		<Route path="/entry/:id" component={ DKEntry } />
	</Route>
);
