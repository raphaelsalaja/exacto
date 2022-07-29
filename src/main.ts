import {formatSuccessMessage, getSelectedNodesOrAllNodes, incrementDocumentUseCount, once, saveSettingsAsync, showUI} from '@create-figma-plugin/utilities'
import {brands} from './data/brands'
import {Settings} from './utilities/settings'
import {CloseUIHandler, SubmitHandler} from './utilities/types'
import {youtube} from './components/misc/youtube'
import {_figma} from './components/misc/figma'
import {gumroad} from './components/misc/gumroad'

export default async function (): Promise<void> {
	once<CloseUIHandler>('CLOSE_UI', function () {
		figma.closePlugin()
	})
	once<SubmitHandler>('SUBMIT', async function (settings: Settings) {
		incrementDocumentUseCount()
		await saveSettingsAsync(settings)
		const font = async () => {
			await figma.loadFontAsync({family: 'Inter', style: 'Bold'})
		}

		//@ts-ignore
		const checkedBrands = Object.keys(settings).filter((key) => settings[key] === true)

		font()
			.then(() => {
				const component_container = figma.createFrame()
				component_container.name = 'Social Media Framework'
				component_container.layoutMode = 'HORIZONTAL'
				component_container.itemSpacing = 128
				component_container.paddingLeft = 0
				component_container.paddingRight = 0
				component_container.fills = []
				component_container.effects = [
					{
						type: 'DROP_SHADOW',
						color: {r: 0, g: 0, b: 0, a: 0.1876000016927719},
						offset: {x: 0, y: 32},
						radius: 64,
						spread: 0,
						visible: true,
						blendMode: 'NORMAL',
						showShadowBehindNode: true,
					},
					{type: 'DROP_SHADOW', color: {r: 0, g: 0, b: 0, a: 0.25}, offset: {x: 0, y: 4}, radius: 4, spread: 0, visible: true, blendMode: 'NORMAL', showShadowBehindNode: false},
				]
				component_container.counterAxisSizingMode = 'AUTO'
				for (const brand of brands) {
					if (checkedBrands.includes(brand.name)) {
						const main_container = figma.createFrame()
						main_container.name = brand.name
						main_container.layoutMode = 'VERTICAL'
						main_container.itemSpacing = 64
						main_container.paddingLeft = 128
						main_container.paddingRight = 128
						main_container.paddingTop = 128
						main_container.paddingBottom = 128
						main_container.counterAxisSizingMode = 'AUTO'
						main_container.cornerRadius = 0

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
						heading.fills = brand.fill
						heading.characters = brand.name
						heading.fontSize = 128

						if (brand.name === 'ChromeWebstore') {
							heading.characters = 'Chrome Webstore'
						}
						if (brand.name === 'ProductHunt') {
							heading.characters = 'Product Hunt'
						}

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
							section_heading.fills = brand.fill

							const divider = figma.createFrame()
							divider.name = 'Divider'
							divider.layoutMode = 'VERTICAL'
							divider.counterAxisSizingMode = 'AUTO'
							divider.resize(variation.dimensions.width, 8)
							divider.fills = brand.fill

							let frame = figma.createFrame()
							frame.name = `${brand.name} | ${variation.name} | ${variation.dimensions.width}x${variation.dimensions.height}`
							frame.resize(variation.dimensions.width, variation.dimensions.height)
							frame.fills = [{type: 'SOLID', visible: true, opacity: 1, blendMode: 'NORMAL', color: {r: 0.8916666507720947, g: 0.8916666507720947, b: 0.8916666507720947}}]
							heading_frame.appendChild(heading)
							section.appendChild(section_heading)
							section.appendChild(divider)

							if (brand.name == 'Youtube' && variation.name == 'Banner') {
								frame.remove()
								youtube(section)
							} else if (brand.name == 'Figma' && variation.name == 'Cover Art') {
								frame.remove()
								_figma(section)
							} else if (brand.name == 'Gumroad' && variation.name == 'Thumbnail') {
								frame.remove()
								gumroad(section)
							} else {
								section.appendChild(frame)
								frame.exportSettings = [{format: 'PNG', suffix: '', contentsOnly: true, constraint: {type: 'SCALE', value: 1}}]
							}

							sections_frame.appendChild(section)
							main_container.appendChild(heading_frame)
							main_container.appendChild(sections_frame)
						}
						component_container.appendChild(main_container)
					}
				}

				const pages = []
				for (const page of figma.root.children) {
					if (page.type === 'PAGE') {
						pages.push(page.name)
					}
				}

				if (!pages.includes('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')) {
					const div = figma.createPage()
					div.name = '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'

					const head = figma.createPage()
					head.name = 'Social Media Frameworks'
				}

				const page = figma.createPage()
				figma.currentPage = page
				page.appendChild(component_container)
				page.name = '    ↳ ' + checkedBrands.join(', ')
				page.backgrounds = [{type: 'SOLID', visible: true, opacity: 1, blendMode: 'NORMAL', color: {r: 0.8, g: 0.8, b: 0.8}}]
			})
			.then(() => {
				const nodes = getSelectedNodesOrAllNodes()
				figma.viewport.scrollAndZoomIntoView(nodes)
			})
			.finally(() => {
				const messages = ['Enjoy 🎉', 'Your Frameworks are ready 🎉', 'Check my page for the full template 😎', 'Share it on Twitter 🐦']
				figma.closePlugin(formatSuccessMessage(messages[Math.floor(Math.random() * messages.length)]))
			})
	})
	showUI({width: 240, height: 400})
}
