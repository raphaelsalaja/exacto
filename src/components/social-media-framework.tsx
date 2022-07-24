import {Button, Checkbox, Text, useForm} from '@create-figma-plugin/ui'
import {emit, on} from '@create-figma-plugin/utilities'
import {h, JSX} from 'preact'
import {useEffect} from 'preact/hooks'
import styles from '../styles/styles.css'
import {CloseUIHandler, FormState, SocialMediaProps, SubmitHandler} from '../utilities/types'

export function SocialMedia(props: SocialMediaProps): JSX.Element {
	const {disabled, formState, handleSubmit, initialFocus, setFormState} = useForm<FormState>(
		{...props, loading: false},
		{
			close: function () {
				emit<CloseUIHandler>('CLOSE_UI')
			},
			submit: function ({loading, Behance, ChromeWebStore, Dribbble, Discord, Facebook, Github, Instagram, Linked, Pinterest, Product, Snapchat, Twitter, Twitch, TikTok, Youtube}: FormState) {
				setFormState(loading, 'loading')
				emit<SubmitHandler>('SUBMIT', {
					Behance,
					ChromeWebStore,
					Dribbble,
					Discord,
					Facebook,
					Github,
					Instagram,
					Linked,
					Pinterest,
					Product,
					Snapchat,
					Twitter,
					Twitch,
					TikTok,
					Youtube,
				})
			},
			validate: function ({Behance, ChromeWebStore, Dribbble, Discord, Facebook, Github, Instagram, Linked, Pinterest, Product, Snapchat, Twitter, Twitch, TikTok, Youtube}: FormState) {
				return (
					Behance === true ||
					ChromeWebStore === true ||
					Dribbble === true ||
					Discord === true ||
					Facebook === true ||
					Github === true ||
					Instagram === true ||
					Linked === true ||
					Pinterest === true ||
					Product === true ||
					Snapchat === true ||
					Twitter === true ||
					Twitch === true ||
					TikTok === true ||
					Youtube === true
				)
			},
		}
	)
	const {Behance, ChromeWebStore, Dribbble, Discord, Facebook, Github, Instagram, Linked, Pinterest, Product, Snapchat, Twitter, Twitch, TikTok, Youtube} = formState
	return (
		<div class={styles.root}>
			<div class={styles.header}>
				<span>Pick a platform to get started</span>
			</div>
			<div class={styles.content}>
				<Checkbox name='Behance' onValueChange={setFormState} value={Behance}>
					<Text> Behance </Text>
				</Checkbox>
				<Checkbox name='ChromeWebStore' onValueChange={setFormState} value={ChromeWebStore}>
					<Text> Chrome Web Store </Text>
				</Checkbox>
				<Checkbox name='Dribbble' onValueChange={setFormState} value={Dribbble}>
					<Text> Dribbble </Text>
				</Checkbox>
				<Checkbox name='Discord' onValueChange={setFormState} value={Discord}>
					<Text> Discord </Text>
				</Checkbox>
				<Checkbox name='Facebook' onValueChange={setFormState} value={Facebook}>
					<Text> Facebook </Text>
				</Checkbox>
				<Checkbox name='Github' onValueChange={setFormState} value={Github}>
					<Text> Github </Text>
				</Checkbox>
				<Checkbox name='Instagram' onValueChange={setFormState} value={Instagram}>
					<Text> Instagram </Text>
				</Checkbox>
				<Checkbox name='Linked' onValueChange={setFormState} value={Linked}>
					<Text> Linked </Text>
				</Checkbox>
				<Checkbox name='Pinterest' onValueChange={setFormState} value={Pinterest}>
					<Text> Pinterest </Text>
				</Checkbox>
				<Checkbox name='Product' onValueChange={setFormState} value={Product}>
					<Text> Product </Text>
				</Checkbox>
				<Checkbox name='Snapchat' onValueChange={setFormState} value={Snapchat}>
					<Text> Snapchat </Text>
				</Checkbox>
			</div>
			<div class={styles.footer}>
				<Button {...initialFocus} disabled={disabled === true} fullWidth onClick={handleSubmit}>
					Build Frames
				</Button>
			</div>
		</div>
	)
}
