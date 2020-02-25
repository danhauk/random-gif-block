/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, createRef } from '@wordpress/element';
import { Button, PanelBody, SelectControl, ResizableBox } from '@wordpress/components';
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

	selectGif = giphyImage => {
		const { setAttributes } = this.props;
		const giphyUrl = giphyImage.embed_url;
		const { image_width, image_height, image_url } = giphyImage;

		setAttributes( {
			giphyImage,
			giphyUrl: image_url,
			gifHeight: image_height,
			gifWidth: image_width,
		} );
	};

	handleRatingSelect = rating => {
		this.props.setAttributes( { rating } );
		this.getRandomGifUrl();
	};

	render() {
		const { attributes, setAttributes, isSelected, toggleSelection } = this.props;
		const { rating, gifHeight, gifWidth, giphyUrl, width, height } = attributes;

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
					<ResizableBox
						className="editor-media-container__resizer"
						size={ {
							height,
							width,
						} }
						minHeight="50"
						minWidth="50"
						enable={ {
							top: false,
							right: true,
							bottom: true,
							left: false,
							topRight: false,
							bottomRight: true,
							bottomLeft: false,
							topLeft: false,
						} }
						onResizeStop={ ( event, direction, elt, delta ) => {
							setAttributes( {
								height: parseInt( elt.style.height + delta.height, 10 ),
								width: parseInt( elt.style.width + delta.width, 10 ),
							} );
							toggleSelection( true );
						} }
						onResizeStart={ () => {
							toggleSelection( false );
						} }
						showHandle={ true }
						lockAspectRatio={ true }>
						<div className="wp-block-danhauk-random-gif-block__image-container">
							<img className="wp-block-danhauk-random-gif-block__image"
								src={ giphyUrl }
								width={ width }
								height={ height }
							/>
						</div>
					</ResizableBox>
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
