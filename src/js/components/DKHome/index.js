import React from 'react';
import content from '../../../entries';
import Radium, { Style } from 'radium'
import styles from '../../../styles';

const DKEntryPreview = ({
	title,
	subtitle,
	date,
	body,
	excerpt,
	tags
}) => (
	<article>
		<div
			style={ {
				backgroundColor: '#88d7ff',
				color: '#60b5e7',
				padding: '1em',
				lineHeight: 1,
				fontSize: '16px',
				fontWeight: 700,
				display: 'inline-flex',
				alignItems: 'center',
				borderBottomLeftRadius: '0.2em',
				borderBottomRightRadius: '0.2em',
				justifyContent: 'center'
			} }
		>
			<code>
				{ 'let tags = [' }
				{
					tags.map((tag, index) => (
						<span key={ index }>
							<a
								href="/#"
								style={ { color: '#fff', textDecoration: 'none' } }
							>{ tag }</a>
							{ ', ' }
						</span>
					))
				}
				{ '];' }
			</code>
		</div>
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
			>{ title }</h1>
			<h2
				style={ {
					paddingBottom: '3em',
					borderBottom: '1px solid #88d7ff',
					color: '#aaa'
				} }
			>{ subtitle }</h2>
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
			>{ date }</div>
		</header>
		<div dangerouslySetInnerHTML={ { __html: excerpt } } />
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

const DKHome = () => (
	<section>
		{
			content.map((entry, index) => (
				<DKEntryPreview
					key={ index }
					{ ...entry }
				/>
			))
		}
	</section>
);

export default DKHome;
