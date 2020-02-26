/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

class RandomGifSave extends Component {
	render() {
		const { giphyUrl, width, height } = this.props.attributes;

		return(
			<div>
				{ giphyUrl && (
					<img className="wp-block-danhauk-random-gif-block__image" src={ giphyUrl } width={ width } height={ height } />
				) }
			</div>
		);
	}
}

export default RandomGifSave;
