/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, createRef } from '@wordpress/element';

const GIPHY_API_KEY = 'NhhRs0qhtbib0fq39VbKNVXdjpM1ZmGO';

class RandomGifEdit extends Component {
	textControlRef = createRef();

	state = {
		result: null,
	};

	getRandomGifUrl = () => {
		const url = 'https://api.giphy.com/v1/gifs/random?rating=g&apiKey=' + GIPHY_API_KEY;

		const xhr = new XMLHttpRequest();
		xhr.open( 'GET', url );
		xhr.onload = () => {
			if ( xhr.status === 200 ) {
				const res = JSON.parse( xhr.responseText );
				const result = res.data;
				this.selectGif( result );
			} else {
				this.setState( {
					result: 'There was a problem getting a gif. Try again.',
				} );
			}
		};

		xhr.send();
	};

	selectGif = randomGif => {
		const { setAttributes } = this.props;
		const giphyUrl = randomGif.embed_url;

		setAttributes( { giphyUrl } );
	};

	render() {
		const { attributes, setAttributes } = this.props;

		if ( ! attributes.giphyUrl ) {
			this.getRandomGifUrl();
		}

		return(
			<div>
				{ attributes.giphyUrl && (
					<iframe src={ attributes.giphyUrl } />
				) }
			</div>
		);
	}
}

export default RandomGifEdit;