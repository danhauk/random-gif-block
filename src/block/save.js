/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

class RandomGifSave extends Component {
	render() {
		const { giphyUrl } = this.props.attributes;

		return(
			<div>
				{ giphyUrl && (
					<img className="wp-block-danhauk-random-gif-block__image" src={ giphyUrl } />
				) }
			</div>
		);
	}
}

export default RandomGifSave;