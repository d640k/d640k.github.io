import React, { PropTypes } from 'react';
import Radium, { Style } from 'radium'
import styles from './styles';

const DKTags = ({
	tags
}) => (
	<section
		style={ styles.base }
	>
		<code>
			{ 'let tags = [' }
			{
				tags.map((tag, index) => (
					<span key={ index }>
						<a
							href="/#"
							style={ styles.link }
						>{ tag }</a>
						{ ', ' }
					</span>
				))
			}
			{ '];' }
		</code>
	</section>
);

DKTags.propTypes = {
	tags: PropTypes.array.isRequired
};

export default DKTags;
