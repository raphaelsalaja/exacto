import {getSelectedNodesOrAllNodes, once, saveSettingsAsync, showUI} from '@create-figma-plugin/utilities'
import {brands} from './data/brands'
import {Settings} from './utilities/settings'
import {CloseUIHandler, SubmitHandler} from './utilities/types'

export default async function (): Promise<void> {
	once<CloseUIHandler>('CLOSE_UI', function () {
		figma.closePlugin()
	})
	once<SubmitHandler>('SUBMIT', async function (settings: Settings) {
		await saveSettingsAsync(settings)
		const plugin_font = async () => {
			await figma.loadFontAsync({family: 'Inter', style: 'Bold'})
		}
		const checkedBrands = Object.keys(settings).filter((key) => settings[key] === true)
		plugin_font()
			.then(() => {
				const component_container = figma.createFrame()
				component_container.name = 'Social Media Framework'
				component_container.layoutMode = 'HORIZONTAL'
				component_container.itemSpacing = 128
				component_container.paddingLeft = 0
				component_container.paddingRight = 0
				component_container.fills = []
				component_container.counterAxisSizingMode = 'AUTO'
				for (const brand of brands) {
					if (checkedBrands.includes(brand.name)) {
						const main_container = figma.createFrame()
						main_container.name = brand.name
						main_container.layoutMode = 'VERTICAL'
						main_container.itemSpacing = 64
						main_container.paddingLeft = 0
						main_container.paddingRight = 0
						main_container.fills = []
						main_container.counterAxisSizingMode = 'AUTO'

						const heading_frame = figma.createFrame()
						heading_frame.name = 'Heading'
						heading_frame.layoutMode = 'VERTICAL'
						heading_frame.itemSpacing = 32
						heading_frame.paddingLeft = 0
						heading_frame.paddingRight = 0
						heading_frame.fills = []
						heading_frame.counterAxisSizingMode = 'AUTO'

						const heading = figma.createText()
						heading.name = brand.name
						heading.fontName = {family: 'Inter', style: 'Bold'}
						heading.fills = [{type: 'SOLID', color: {r: 1, g: 1, b: 1}}]
						heading.characters = brand.name
						heading.fontSize = 64

						const sections_frame = figma.createFrame()
						sections_frame.name = 'Sections'
						sections_frame.layoutMode = 'HORIZONTAL'
						sections_frame.itemSpacing = 128
						sections_frame.paddingLeft = 0
						sections_frame.paddingRight = 0
						sections_frame.fills = []
						sections_frame.counterAxisSizingMode = 'AUTO'

						for (const variation of brand.variations) {
							const section = figma.createFrame()
							section.name = 'Section'
							section.layoutMode = 'VERTICAL'
							section.itemSpacing = 64
							section.paddingLeft = 0
							section.paddingRight = 0
							section.fills = []
							section.counterAxisSizingMode = 'AUTO'

							const section_heading = figma.createText()
							section_heading.name = variation.name
							section_heading.fontName = {family: 'Inter', style: 'Bold'}
							section_heading.characters = variation.name
							section_heading.fontSize = 64
							section_heading.fills = [{type: 'SOLID', color: {r: 1, g: 1, b: 1}}]

							const divider = figma.createFrame()
							divider.name = 'Divider'
							divider.layoutMode = 'VERTICAL'
							divider.counterAxisSizingMode = 'AUTO'
							divider.resize(variation.dimensions.width, 8)

							const frame = figma.createFrame()
							frame.name = variation.name
							frame.resize(variation.dimensions.width, variation.dimensions.height)

							heading_frame.appendChild(heading)
							section.appendChild(section_heading)
							section.appendChild(divider)
							section.appendChild(frame)
							sections_frame.appendChild(section)
							main_container.appendChild(heading_frame)
							main_container.appendChild(sections_frame)
						}

						// at the end of the loop, we append the main_container to the component_container

						component_container.appendChild(main_container)
					}
				}
				const page = figma.createPage()
				page.appendChild(component_container)
				figma.currentPage = page
				page.name = '    ↳ ✨ Social Media Framework '
			})
			.then(() => {
				const nodes = getSelectedNodesOrAllNodes()
				figma.viewport.scrollAndZoomIntoView(nodes)
			})
			.finally(() => {
				figma.closePlugin()
			})
	})
	showUI({width: 240, title: 'Social Media Framework Companion', height: 400})
}
