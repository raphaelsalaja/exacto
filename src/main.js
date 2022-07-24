import {once, showUI} from '@create-figma-plugin/utilities'
export default function () {
	once('CREATE_RECTANGLES', function (count) {
		var nodes = []
		for (var i = 0; i < count; i++) {
			var rect = figma.createRectangle()
			rect.x = i * 150
			rect.fills = [
				{
					type: 'SOLID',
					color: {r: 1, g: 0.5, b: 0},
				},
			]
			figma.currentPage.appendChild(rect)
			nodes.push(rect)
		}
		figma.currentPage.selection = nodes
		figma.viewport.scrollAndZoomIntoView(nodes)
		figma.closePlugin()
	})
	once('CLOSE', function () {
		figma.closePlugin()
	})
	showUI({
		width: 240,
		height: 480,
		title: 'Social Media Framework Companion',
	})
}
