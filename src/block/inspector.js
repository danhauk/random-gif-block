/**
 * Internal block libraries
 */

const { Component } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, TextControl } = wp.components;
const { __ } = wp.i18n;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

	render() {
		const { attributes, setAttributes } = this.props;

		return (
			<InspectorControls>
				<PanelBody>
					<TextControl
						label="API Key"
						help={ <p>Please create your API key on the  <a href="https://developers.giphy.com/dashboard/?create=true" target="_blank">Giphy Developer Dashboard</a>. This is required to load a random gif.</p> }
						value={ attributes.apiKey }
						onChange={ apiKey => { 
							if( ! apiKey ) {
								apiKey = 'NhhRs0qhtbib0fq39VbKNVXdjpM1ZmGO';
							}
							setAttributes( { apiKey } );
						} }
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
