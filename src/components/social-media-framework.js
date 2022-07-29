import {Button, Container, render, Text, VerticalSpace, Stack, Toggle, Preview} from '@create-figma-plugin/ui'
import {h} from 'preact'
import {useState} from 'preact/hooks'
import {brands} from '../data/brands'
import styles from '../styles/styles.css'
function Plugin() {
	var _a = useState(false),
		open = _a[0],
		setOpen = _a[1]
	var _b = useState(false),
		value = _b[0],
		setValue = _b[1]
	// get all brand names and types
	function handleClick(event) {
		console.log(event)
		setOpen(!(open === true))
	}
	function handleChange(event) {
		var newValue = event.currentTarget.checked
		console.log(newValue)
		setValue(newValue)
	}
	return (
		// div with no overflow to prevent scrollbar
		h(
			'div',
			{class: styles.body},
			h(Preview, null, 'foo'),
			h(
				'div',
				{style: {overflow: 'hidden'}},
				h(
					Stack,
					{space: 'extraSmall'},
					h(VerticalSpace, {space: 'small'}),
					brands.map(function (brand) {
						return h(Toggle, {onChange: handleChange, value: value}, h(Text, null, brand.name, h(VerticalSpace, {space: 'small'})))
					})
				)
			),
			h(Container, {space: 'medium'}, h(Button, {fullWidth: true}, 'Text'), h(VerticalSpace, {space: 'medium'}))
		)
	)
}
export default render(Plugin)
