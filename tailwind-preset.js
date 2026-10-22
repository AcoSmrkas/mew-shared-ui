/** @type {import('tailwindcss').Config} */
export default {
	// base.css owns .container (1140px); Tailwind's would override it at >=1280px.
	corePlugins: {
		container: false
	},
	theme: {
		extend: {
			colors: {
				mew: {
					main: 'var(--main-color)',
					secondary: 'var(--secondary-color)',
					info: 'var(--info-color)',
					bg: 'var(--background)',
					footer: 'var(--footer)',
					form: 'var(--forms-bg)',
					border: 'var(--borders)',
					text: 'var(--text-color)',
					light: 'var(--text-light)',
					strong: 'var(--text-strong)'
				}
			},
			width: {
				'fit-content': 'fit-content'
			},
			lineHeight: {
				11: '50px',
				12: '70px'
			}
		}
	}
};
