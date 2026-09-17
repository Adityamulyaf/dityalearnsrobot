// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'dityalearnsrobot',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Adityamulyaf' }],
			customCss: ['./src/styles/custom.css'],
			components: {
				PageTitle: './src/components/overrides/PageTitle.astro',
				Footer: './src/components/overrides/Footer.astro',
				ThemeSelect: './src/components/overrides/EmptyThemeSelect.astro',
			},
			sidebar: [
				{ label: 'Home', link: '/' },
				{
					label: 'Learning',
					items: [
						{ label: 'Robotics', items: [{ autogenerate: { directory: 'learning/robotics' } }] },
						{ label: 'AI & Perception', items: [{ autogenerate: { directory: 'learning/ai' } }] },
						{ label: 'Embedded', items: [{ autogenerate: { directory: 'learning/embedded' } }] },
						{ label: 'Electronics', items: [{ autogenerate: { directory: 'learning/electronics' } }] },
						{ label: 'Control', items: [{ autogenerate: { directory: 'learning/control' } }] },
					],
				},
				{
					label: 'Projects',
					items: [{ label: 'RoboBoat', link: '/projects/roboboat/' }],
				},
				{
					label: 'Log',
					items: [{ label: 'Build Log', link: '/log/' }],
				},
				{ label: 'About', link: '/about/' },
			],
		}),
		mdx(),
	],
});
