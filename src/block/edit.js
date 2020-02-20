/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, createRef } from '@wordpress/element';
import { Button, PanelBody, SelectControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

const GIPHY_API_KEY = 'NhhRs0qhtbib0fq39VbKNVXdjpM1ZmGO';

class RandomGifEdit extends Component {
	textControlRef = createRef();

	state = {
		result: null,
	};

	getRandomGifUrl = () => {
		const { rating } = this.props.attributes;
		const url = 'https://api.giphy.com/v1/gifs/random?rating=' +
								rating + '&apiKey=' + GIPHY_API_KEY;

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

	handleRatingSelect = rating => {
		this.props.setAttributes( { rating } );
		this.getRandomGifUrl();
	};

	render() {
		const { attributes, isSelected } = this.props;
		const { rating } = attributes;

		if ( ! attributes.giphyUrl ) {
			this.getRandomGifUrl();
		}

		return(
			<div className="wp-block-danhauk-random-gif-block">
				<InspectorControls>
					<PanelBody className="components-panel__body-random-gif-rating">
						<SelectControl
							label={ __( 'Content Rating' ) }
							help={ __( 'Set a content rating for your random GIFs, moderated and organized by GIPHY.' ) }
							value={ rating }
							options={ [
								{ label: 'G', value: 'g' },
								{ label: 'PG', value: 'pg' },
								{ label: 'PG-13', value: 'pg-13' },
								{ label: 'R', value: 'r' },
							] }
							onChange={ this.handleRatingSelect }
						/>
					</PanelBody>
				</InspectorControls>

				{ attributes.giphyUrl && (
					<iframe src={ attributes.giphyUrl } />
				) }

				{ isSelected && (
					<Button isDefault onClick={ this.getRandomGifUrl }>
						{ __( 'Surprise me!' ) }
					</Button>
				) }
			</div>
		);
	}
}

export default RandomGifEdit;