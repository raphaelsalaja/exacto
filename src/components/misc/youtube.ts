export function youtube(child: FrameNode) {
	const font = async () => {
		figma.loadFontAsync({family: 'Inter', style: 'Bold'})
	}
	font().then(() => {
		const main = figma.createFrame()
		main.resize(2560.0, 1440.0)
		main.primaryAxisSizingMode = 'AUTO'
		main.name = 'Youtube | Banner | 2560x1440'
		main.relativeTransform = [
			[1, 0, -1280],
			[0, 1, -720.4005126953],
		]
		main.x = 0
		main.y = 0
		main.exportSettings = [{format: 'PNG', suffix: '', contentsOnly: true, constraint: {type: 'SCALE', value: 1}}]
		main.fills = []
		main.guides = [
			{axis: 'X', offset: 2053},
			{axis: 'X', offset: 354},
			{axis: 'X', offset: 508},
			{axis: 'X', offset: 2208},
			{axis: 'Y', offset: 509},
			{axis: 'Y', offset: 932},
		]

		const tvSafeArea = figma.createRectangle()
		main.appendChild(tvSafeArea)
		tvSafeArea.resize(2560.0, 1440.0)
		tvSafeArea.name = 'TV SAFE AREA'
		tvSafeArea.fills = [{type: 'SOLID', visible: true, opacity: 1, blendMode: 'NORMAL', color: {r: 0.8916666507720947, g: 0.8916666507720947, b: 0.8916666507720947}}]

		const tvSafeArea_text = figma.createText()
		main.appendChild(tvSafeArea_text)
		tvSafeArea_text.resize(89.0, 38.0)
		tvSafeArea_text.name = 'TV SAFE AREA'
		tvSafeArea_text.fills = [{type: 'SOLID', visible: true, opacity: 1, blendMode: 'NORMAL', color: {r: 1, g: 0, b: 0}}]
		tvSafeArea_text.relativeTransform = [
			[1, 0, 27],
			[0, 1, 40],
		]
		tvSafeArea_text.x = 27
		tvSafeArea_text.y = 40
		tvSafeArea_text.fontName = {family: 'Inter', style: 'Bold'}
		tvSafeArea_text.fontSize = 16
		tvSafeArea_text.characters = 'TV \nSAFE AREA'
		tvSafeArea_text.textAutoResize = 'WIDTH_AND_HEIGHT'

		const desktopSafeArea = figma.createRectangle()
		main.appendChild(desktopSafeArea)
		desktopSafeArea.resize(2560.0, 423.0)
		desktopSafeArea.name = 'DESKTOP SAFE AREA'
		desktopSafeArea.fills = [{type: 'SOLID', visible: true, opacity: 1, blendMode: 'NORMAL', color: {r: 0.7733072638511658, g: 0.7733072638511658, b: 0.7733072638511658}}]
		desktopSafeArea.relativeTransform = [
			[1, 0, 0],
			[0, 1, 509],
		]
		desktopSafeArea.y = 509

		const desktopSafeArea_text = figma.createText()
		main.appendChild(desktopSafeArea_text)
		desktopSafeArea_text.resize(89.0, 38.0)
		desktopSafeArea_text.name = 'DESKTOP SAFE AREA'
		desktopSafeArea_text.fills = [{type: 'SOLID', visible: true, opacity: 1, blendMode: 'NORMAL', color: {r: 1, g: 0, b: 0}}]
		desktopSafeArea_text.relativeTransform = [
			[1, 0, 27],
			[0, 1, 540],
		]
		desktopSafeArea_text.x = 27
		desktopSafeArea_text.y = 540
		desktopSafeArea_text.fontName = {family: 'Inter', style: 'Bold'}
		desktopSafeArea_text.fontSize = 16
		desktopSafeArea_text.characters = 'DESKTOP \nSAFE AREA'
		desktopSafeArea_text.textAutoResize = 'WIDTH_AND_HEIGHT'

		const tabletSafeArea = figma.createRectangle()
		main.appendChild(tabletSafeArea)
		tabletSafeArea.resize(1855.0, 423.0)
		tabletSafeArea.name = 'TABLET SAFE AREA'
		tabletSafeArea.fills = [{type: 'SOLID', visible: true, opacity: 1, blendMode: 'NORMAL', color: {r: 0.5833333134651184, g: 0.5833333134651184, b: 0.5833333134651184}}]
		tabletSafeArea.relativeTransform = [
			[1, 0, 353],
			[0, 1, 509],
		]
		tabletSafeArea.x = 353
		tabletSafeArea.y = 509

		const tabletSafeArea_text = figma.createText()
		main.appendChild(tabletSafeArea_text)
		tabletSafeArea_text.resize(89.0, 38.0)
		tabletSafeArea_text.name = 'TABLET SAFE AREA'
		tabletSafeArea_text.fills = [{type: 'SOLID', visible: true, opacity: 1, blendMode: 'NORMAL', color: {r: 1, g: 0, b: 0}}]
		tabletSafeArea_text.relativeTransform = [
			[1, 0, 378],
			[0, 1, 543],
		]
		tabletSafeArea_text.x = 378
		tabletSafeArea_text.y = 543
		tabletSafeArea_text.fontName = {family: 'Inter', style: 'Bold'}
		tabletSafeArea_text.characters = 'TABLET\nSAFE AREA'
		tabletSafeArea_text.fontSize = 16
		tabletSafeArea_text.textAutoResize = 'WIDTH_AND_HEIGHT'

		const mobileSafeArea = figma.createRectangle()
		main.appendChild(mobileSafeArea)
		mobileSafeArea.resize(1545.0, 423.0)
		mobileSafeArea.name = 'MOBILE SAFE AREA'
		mobileSafeArea.fills = [{type: 'SOLID', visible: true, opacity: 1, blendMode: 'NORMAL', color: {r: 0.4416666626930237, g: 0.4416666626930237, b: 0.4416666626930237}}]
		mobileSafeArea.relativeTransform = [
			[1, 0, 508],
			[0, 1, 509],
		]
		mobileSafeArea.x = 508
		mobileSafeArea.y = 509

		const mobileSafeArea_text = figma.createText()
		main.appendChild(mobileSafeArea_text)
		mobileSafeArea_text.resize(89.0, 38.0)
		mobileSafeArea_text.name = 'MOBILE SAFE AREA'
		mobileSafeArea_text.fills = [{type: 'SOLID', visible: true, opacity: 1, blendMode: 'NORMAL', color: {r: 1, g: 0, b: 0}}]
		mobileSafeArea_text.relativeTransform = [
			[1, 0, 540],
			[0, 1, 543],
		]
		mobileSafeArea_text.x = 540
		mobileSafeArea_text.y = 543
		mobileSafeArea_text.fontName = {family: 'Inter', style: 'Bold'}
		mobileSafeArea_text.characters = 'MOBILE\nSAFE AREA'
		mobileSafeArea_text.fontSize = 16
		mobileSafeArea_text.textAutoResize = 'WIDTH_AND_HEIGHT'

		const group = figma.group([tvSafeArea, tvSafeArea_text, desktopSafeArea, desktopSafeArea_text, tabletSafeArea, tabletSafeArea_text, mobileSafeArea, mobileSafeArea_text], main)
		group.name = 'Guide'
		group.visible = true
		group.locked = false
		group.opacity = 1
		group.blendMode = 'PASS_THROUGH'
		group.isMask = false
		group.effects = []
		group.layoutAlign = 'INHERIT'
		group.constrainProportions = false
		group.layoutGrow = 0
		group.exportSettings = []
		group.reactions = []
		group.expanded = true

		main.locked = true

		child.appendChild(main)
	})
}

export default youtube as unknown as SceneNode
