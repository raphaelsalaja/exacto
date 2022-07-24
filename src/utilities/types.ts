import {EventHandler} from '@create-figma-plugin/utilities'
import {Settings} from './settings'

export type SocialMediaProps = Settings & {
	hasSelection: boolean
}
export type FormState = SocialMediaProps & {
	loading: boolean
}
export interface CloseUIHandler extends EventHandler {
	name: 'CLOSE_UI'
	handler: () => void
}
export interface SubmitHandler extends EventHandler {
	name: 'SUBMIT'
	handler: (settings: Settings) => void
}
