wp.blocks.registerBlockType( 'jakub-pise/program-card', {
	title: 'Program card',
	icon: 'images-alt',
	category: 'common',
	attributes: {
		content: {type: 'string'},
		color: {type: 'string'}
	},
	edit: (props) => {
		const updateContent = (event) => {
			props.setAttributes({
				content: event.target.value
			});
		};


		return wp.element.createElement(
			"div",
			null,
			wp.element.createElement(
				"h3", 
				null, 
				props.attributes.content
			),
			wp.element.createElement(
				"input", 
				{
					type: "text",
					value: props.attributes.content,
					onChange: updateContent
				}
			)
		);
	},
	save: (props) => {
		return wp.element.createElement("h3", null, props.attributes.content);
	},
} );