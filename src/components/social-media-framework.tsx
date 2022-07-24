import {Button, Container, Divider, MiddleAlign, render, SelectableItem, Text, VerticalSpace, Stack, Toggle, Banner, IconInfo32, Preview, Checkbox} from '@create-figma-plugin/ui'
import {Fragment, h, JSX} from 'preact'
import {useState} from 'preact/hooks'
import {brands} from '../data/brands'

import styles from '../styles/styles.css'

function Plugin() {
	const [open, setOpen] = useState<boolean>(false)
	const [value, setValue] = useState<boolean>(false)
	function handleClick(event: JSX.TargetedMouseEvent<HTMLInputElement>) {
		console.log(event)
		setOpen(!(open === true))
	}
	function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
		const newValue = event.currentTarget.checked
		console.log(newValue)
		setValue(newValue)
	}
	return (
		<div class={styles.root}>
			<div class={styles.header}>
				<span>Pick a platform to get started</span>
			</div>
			<div class={styles.content}>
				{brands.map((brand) => (
					<Checkbox onChange={handleChange} value={value}>
						<Text>{brand.name}</Text>
					</Checkbox>
				))}
			</div>
			<div class={styles.footer}>
				<Button fullWidth>Build Frames</Button>
			</div>
		</div>
	)
}
export default render(Plugin)
