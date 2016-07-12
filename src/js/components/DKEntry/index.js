import React, { PropTypes } from 'react';
import content from '../../../entries';
import Radium, { Style } from 'radium'
import styles from '../../../styles';
import DKTags from '../DKTags';

const DKEntry = ({
	params
}) => (
	<article>
		<DKTags tags={ content[params.id].tags } />
		<header
			style={ {
				padding: '8em 0 3em',
				marginBottom: '2em',
				textAlign: 'center'
			} }
		>
			<h1
				style={ {
					paddingBottom: '0.25em',
				} }
			>{ content[params.id].title }</h1>
			<h2
				style={ {
					paddingBottom: '3em',
					borderBottom: '1px solid #88d7ff',
					color: '#aaa'
				} }
			>{ content[params.id].subtitle }</h2>
			<div
				style={ {
					fontSize: '12px',
					backgroundColor: '#88d7ff',
					color: '#fff',
					padding: '0.5em 1em',
					display: 'inline-block',
					borderBottomLeftRadius: '0.2em',
					borderBottomRightRadius: '0.2em',
					lineHeight: 1,
					fontWeight: 700,
					fontFamily: `'Ubuntu Mono', monospace`
				} }
			>{ content[params.id].date }</div>
		</header>

		<div dangerouslySetInnerHTML={ { __html: content[params.id].body } } />

		<footer
			style={ {
				margin: '8em 0'
			} }
		>
			<div>
				<a href="/#" style={ { borderTopLeftRadius: '3px', borderTopRightRadius: '3px', fontFamily: `'Ubuntu Mono', monospace`, color: '#fff', textDecoration: 'none', backgroundColor: '#88d7ff', padding: '0.5em 1em', lineHeight: 1 } }><span style={{ fontWeight: 700 }}><span style={ { marginRight: '0.5em' } }>↜</span></span> The JavaScript Prototype in Depth</a>
			</div>
			<hr
				style={ {
					border: 'none',
					borderTop: '1px solid #88d7ff'
				} }
			/>
			<div style={ { textAlign: 'right'} }>
				<a href="/#" style={ { borderBottomLeftRadius: '3px', borderBottomRightRadius: '3px', fontFamily: `'Ubuntu Mono', monospace`, color: '#fff', textDecoration: 'none', backgroundColor: '#88d7ff', padding: '0.5em 1em', lineHeight: 1 } }>Redux Primer <span style={{ fontWeight: 700, marginLeft: '0.5em' }}>↝</span></a>
			</div>
		</footer>
	</article>
);

DKEntry.propTypes = {
	params: PropTypes.object.isRequired
};

export default DKEntry;
