/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

class RandomGifSave extends Component {
	render() {
		const { attributes } = this.props;

		return(
			<div>
				{ attributes.giphyUrl && (
					<iframe src={ attributes.giphyUrl } />
				) }
			</div>
		);
	}
}

export default RandomGifSave;