module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			keyframes: {
				move: {
					'25%': { transform: 'translateY(-50px)' },
					'50%': { transform: 'translateY(-100px)' },
					'75%': { transform: 'translateY(-150px)' },
					'100%': { transform: 'translateY(-200px)' },
				}
			},
			animation: {
				move: 'move 10s ease-in-out infinite alternate',
			},
			colors: {
				'custom-green': '#59b256'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
