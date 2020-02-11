/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { SVG, G, Rect, Path, Polygon } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import './style.scss';

export const icon = (
	<SVG xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><G><Rect fill="none" height="24" width="24" x="0"/></G><G><G><Rect height="6" width="1.5" x="11.5" y="9"/><Path d="M9,9H6c-0.6,0-1,0.5-1,1v4c0,0.5,0.4,1,1,1h3c0.6,0,1-0.5,1-1v-2H8.5v1.5h-2v-3H10V10C10,9.5,9.6,9,9,9z"/><Polygon points="19,10.5 19,9 14.5,9 14.5,15 16,15 16,13 18,13 18,11.5 16,11.5 16,10.5"/></G></G></SVG>
);

/**
 * Register Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'danhauk/random-gif-block', {
	title: __( 'Random GIF' ),
	icon,
	category: 'common',
	keywords: [
		__( 'gif' ),
		__( 'giphy' ),
		__( 'image' ),
	],

	attributes: {
		rating: {
			type: 'string',
			default: 'g',
		},
		giphyUrl: {
			type: 'string',
		}
	},

	edit,
	save,
} );
