import {EventHandler} from '@create-figma-plugin/utilities'

export interface CreateRectanglesHandler extends EventHandler {
	name: 'CREATE_RECTANGLES'
	handler: (count: number) => void
}

export interface CloseHandler extends EventHandler {
	name: 'CLOSE'
	handler: () => void
}

export interface CloseUIHandler extends EventHandler {
	name: 'CLOSE_UI'
	handler: () => void
}

export interface SelectionChangedHandler extends EventHandler {
	name: 'SELECTION_CHANGED'
	handler: (hasSelection: boolean) => void
}
