export function gumroad(child: FrameNode) {
	const font = async () => {
		figma.loadFontAsync({family: 'Inter', style: 'Bold'})
	}
	font().then(() => {
		var general_placeholder_1_b4dc = figma.createPaintStyle()
		general_placeholder_1_b4dc.name = 'General/Placeholder/1'
		general_placeholder_1_b4dc.paints = [{type: 'SOLID', visible: true, opacity: 1, blendMode: 'NORMAL', color: {r: 0.8916666507720947, g: 0.8916666507720947, b: 0.8916666507720947}}]

		// Create STYLE
		var brands_gumroad_c1d4 = figma.createPaintStyle()
		brands_gumroad_c1d4.name = 'Brands/Gumroad'
		brands_gumroad_c1d4.paints = [{type: 'SOLID', visible: true, opacity: 1, blendMode: 'NORMAL', color: {r: 0, g: 0, b: 0}}]

		// Create STYLE
		var general_placeholder_1_b4dc = figma.createPaintStyle()
		general_placeholder_1_b4dc.name = 'General/Placeholder/1'
		general_placeholder_1_b4dc.paints = [{type: 'SOLID', visible: true, opacity: 1, blendMode: 'NORMAL', color: {r: 0.8916666507720947, g: 0.8916666507720947, b: 0.8916666507720947}}]

		// Create FRAME
		var frame_361_1201 = figma.createFrame()
		frame_361_1201.resize(600.0, 600.0)
		frame_361_1201.fillStyleId = general_placeholder_1_b4dc.id
		frame_361_1201.backgroundStyleId = general_placeholder_1_b4dc.id
		frame_361_1201.name = 'Gumroad | Thumbnail | 600x600'
		frame_361_1201.relativeTransform = [
			[1, 0, 0],
			[0, 1, 180],
		]
		frame_361_1201.y = 180
		frame_361_1201.exportSettings = [{format: 'PNG', suffix: '', contentsOnly: true, constraint: {type: 'SCALE', value: 1}}]
		frame_361_1201.paddingLeft = 10
		frame_361_1201.paddingRight = 10
		frame_361_1201.paddingTop = 10
		frame_361_1201.paddingBottom = 10
		frame_361_1201.primaryAxisSizingMode = 'FIXED'
		frame_361_1201.clipsContent = false
		frame_361_1201.expanded = false
		frame_361_1201.itemSpacing = 10

		// Create TEXT
		var text_363_1706 = figma.createText()
		frame_361_1201.appendChild(text_363_1706)
		text_363_1706.fillStyleId = brands_gumroad_c1d4.id
		text_363_1706.resize(575.0, 76.0)
		text_363_1706.name = 'Your image should be square And at least 600 x 600px'
		text_363_1706.relativeTransform = [
			[1, 0, 24],
			[0, 1, 24],
		]
		text_363_1706.x = 24
		text_363_1706.y = 24
		text_363_1706.fontName = {family: 'Inter', style: 'Bold'}
		text_363_1706.characters = 'Your image should be square\nAnd at least 600 x 600px'
		text_363_1706.fontSize = 32
		text_363_1706.textCase = 'UPPER'
		text_363_1706.textAutoResize = 'HEIGHT'

		child.appendChild(frame_361_1201)
	})
}
