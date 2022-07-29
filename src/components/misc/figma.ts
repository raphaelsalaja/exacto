export function _figma(child: FrameNode) {
	const font = async () => {
		figma.loadFontAsync({family: 'Inter', style: 'Bold'})
	}
	font().then(() => {
		const main = figma.createFrame()
		main.resize(1920.0, 960.0)
		main.primaryAxisSizingMode = 'AUTO'
		main.name = 'Figma | Cover Art | 1920x960'
		main.relativeTransform = [
			[1, 0, 0],
			[0, 1, 244],
		]
		main.y = 244
		main.fills = [{type: 'SOLID', visible: true, opacity: 1, blendMode: 'NORMAL', color: {r: 0.8916666507720947, g: 0.8916666507720947, b: 0.8916666507720947}}]
		main.backgrounds = [{type: 'SOLID', visible: true, opacity: 1, blendMode: 'NORMAL', color: {r: 0.8916666507720947, g: 0.8916666507720947, b: 0.8916666507720947}}]

		const safeArea = figma.createRectangle()
		main.appendChild(safeArea)
		safeArea.resize(1600.0, 960.0)
		safeArea.name = 'SAFE AREA'
		safeArea.fills = [{type: 'SOLID', visible: true, opacity: 1, blendMode: 'NORMAL', color: {r: 0.7733072638511658, g: 0.7733072638511658, b: 0.7733072638511658}}]
		safeArea.relativeTransform = [
			[1, 0, 160],
			[0, 1, 0],
		]
		safeArea.x = 160

		const safeArea_text = figma.createText()
		main.appendChild(safeArea_text)
		safeArea_text.resize(92.0, 38.0)
		safeArea_text.name = 'COVER ART SAFE AREA'
		safeArea_text.fills = [{type: 'SOLID', visible: true, opacity: 1, blendMode: 'NORMAL', color: {r: 0.6352941393852234, g: 0.3490196168422699, b: 1}}]
		safeArea_text.relativeTransform = [
			[1, 0, 184],
			[0, 1, 16],
		]
		safeArea_text.x = 184
		safeArea_text.y = 16
		safeArea_text.fontName = {family: 'Inter', style: 'Bold'}
		safeArea_text.characters = 'COVER ART\nSAFE AREA'
		safeArea_text.fontSize = 16
		safeArea_text.textAutoResize = 'WIDTH_AND_HEIGHT'

		const group = figma.group([safeArea, safeArea_text], main)
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

		child.appendChild(main)
	})
}

export default _figma as unknown as SceneNode
