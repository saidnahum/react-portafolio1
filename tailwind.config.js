module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			height: {
				"10v": "10vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
				"100v": "100vh",
			},
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
