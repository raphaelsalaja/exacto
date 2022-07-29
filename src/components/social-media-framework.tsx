import {Button, Checkbox, Text, useForm} from '@create-figma-plugin/ui'
import {emit} from '@create-figma-plugin/utilities'
import {h, JSX} from 'preact'
import styles from '../styles/styles.css'
import {CloseUIHandler, FormState, SocialMediaProps, SubmitHandler} from '../utilities/types'

export function SocialMedia(props: SocialMediaProps): JSX.Element {
	const {disabled, formState, handleSubmit, initialFocus, setFormState} = useForm<FormState>(
		{...props, loading: false},
		{
			close: function () {
				emit<CloseUIHandler>('CLOSE_UI')
			},
			submit: function ({loading, Behance, ChromeWebstore, Dribbble, Discord, Facebook, Figma, Github, Gumroad, Instagram, LinkedIn, Pinterest, ProductHunt, Snapchat, Twitter, Twitch, TikTok, Youtube}: FormState) {
				setFormState(loading, 'loading')
				emit<SubmitHandler>('SUBMIT', {
					Behance,
					ChromeWebstore,
					Dribbble,
					Discord,
					Facebook,
					Figma,
					Github,
					Gumroad,
					Instagram,
					LinkedIn,
					Pinterest,
					ProductHunt,
					Snapchat,
					Twitter,
					Twitch,
					TikTok,
					Youtube,
				})
			},
			validate: function ({Behance, ChromeWebstore, Dribbble, Discord, Facebook, Figma, Github, Gumroad, Instagram, LinkedIn, Pinterest, ProductHunt, Snapchat, Twitter, Twitch, TikTok, Youtube}: FormState) {
				return Behance === true || ChromeWebstore === true || Dribbble === true || Discord === true || Facebook === true || Figma === true || Github === true || Gumroad === true || Instagram === true || LinkedIn === true || Pinterest === true || ProductHunt === true || Snapchat === true || Twitter === true || Twitch === true || TikTok === true || Youtube === true
			},
		}
	)
	const {Behance, ChromeWebstore, Dribbble, Discord, Facebook, Figma, Github, Gumroad, Instagram, LinkedIn, Pinterest, ProductHunt, Snapchat, Twitter, Twitch, TikTok, Youtube} = formState
	return (
		<div class={styles.root}>
			<div class={styles.header}>
				<div class={styles['header-container']}>
					<span class={styles.bold}>Welcome to Exacto!</span>
					<span>Choose your desired brands below.</span>
				</div>
			</div>
			<div class={styles.content}>
				<Checkbox name='Behance' onValueChange={setFormState} value={Behance}>
					<Text> Behance </Text>
				</Checkbox>
				<Checkbox name='ChromeWebstore' onValueChange={setFormState} value={ChromeWebstore}>
					<Text> Chrome Webstore </Text>
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
				<Checkbox name='Figma' onValueChange={setFormState} value={Figma}>
					<Text> Figma </Text>
				</Checkbox>
				<Checkbox name='Github' onValueChange={setFormState} value={Github}>
					<Text> Github </Text>
				</Checkbox>
				<Checkbox name='Gumroad' onValueChange={setFormState} value={Gumroad}>
					<Text> Gumroad </Text>
				</Checkbox>
				<Checkbox name='Instagram' onValueChange={setFormState} value={Instagram}>
					<Text> Instagram </Text>
				</Checkbox>
				<Checkbox name='LinkedIn' onValueChange={setFormState} value={LinkedIn}>
					<Text> LinkedIn </Text>
				</Checkbox>
				<Checkbox name='Pinterest' onValueChange={setFormState} value={Pinterest}>
					<Text> Pinterest </Text>
				</Checkbox>
				<Checkbox name='ProductHunt' onValueChange={setFormState} value={ProductHunt}>
					<Text> Product Hunt </Text>
				</Checkbox>
				<Checkbox name='Snapchat' onValueChange={setFormState} value={Snapchat}>
					<Text> Snapchat </Text>
				</Checkbox>
				<Checkbox name='Twitter' onValueChange={setFormState} value={Twitter}>
					<Text> Twitter </Text>
				</Checkbox>
				<Checkbox name='Twitch' onValueChange={setFormState} value={Twitch}>
					<Text> Twitch </Text>
				</Checkbox>
				<Checkbox name='TikTok' onValueChange={setFormState} value={TikTok}>
					<Text> Tik Tok </Text>
				</Checkbox>
				<Checkbox name='Youtube' onValueChange={setFormState} value={Youtube}>
					<Text> Youtube </Text>
				</Checkbox>
			</div>
			<div class={styles.footer}>
				<Button {...initialFocus} disabled={disabled === true} fullWidth onClick={handleSubmit}>
					Build Frames
				</Button>
				<span class={styles.support}>
					Created with love by <a href='https://twitter.com/raf_underscore'>Raphael S</a>
				</span>
			</div>
		</div>
	)
}
