/**
 * BLOCK: random-gif-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
import Inspector from './inspector';

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;
const { PlainText } = wp.editor;

function getRandomGifUrl( apiKey ) {
	fetch( 'https://api.giphy.com/v1/gifs/random?rating=g&apiKey=' + apiKey )
		.then( ( response ) => response.json() )
		.then( function( res ) {
			console.log( res.data.image_url );
			return res.data.image_url;
		} );
}

/**
 * Register: aa Gutenberg Block.
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
registerBlockType( 'grg/block-random-gif-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Random Gif' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'gif' ),
		__( 'giphy' ),
	],

	attributes: {
		apiKey: {
			type: 'string',
			default: '',
		},
		randomGifUrl: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
		const { attributes, setAttributes } = props;
		let randomGifUrl = getRandomGifUrl( attributes.apiKey );

		return [
			<Inspector { ...{ setAttributes, ...props } } />,
			<div>
				<img src={ randomGifUrl } />
			</div>
		];
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		const { attributes } = props;
		let randomGifUrl = getRandomGifUrl( attributes.apiKey );

		return (
			<div className={ props.className }>
				<img src={ randomGifUrl } />
			</div>
		);
	},
} );
