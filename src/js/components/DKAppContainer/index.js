import React, { PropTypes } from 'react';
import Radium, { Style } from 'radium'
import { pageWrapper, core, siteHeader, siteFooter } from '../../../styles';

const DKAppContainer = ({ children }) => (
	<div
		style={ pageWrapper }
	>
		<header style={ siteHeader }></header>
		{ children }
		<footer style={ siteFooter }>©2016 Dave Krstin</footer>

		<Style rules={ core } />
	</div>
);

DKAppContainer.propTypes = {
	children: PropTypes.node
};

export default DKAppContainer;
