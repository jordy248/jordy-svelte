const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'neon-red': 'var(--color-neon-red)',
				'neon-blue': 'var(--color-neon-blue)'
			},
			fontFamily: {
				Neonderthaw: ['Neonderthaw', 'cursive']
			},
			keyframes: {
				fingerguns: {
					'0%': { transform: 'rotateZ(0deg)' },
					'5%': { transform: 'rotateZ(25deg)' },
					'25%': { transform: 'rotateZ(5deg)' },
					'30%': { transform: 'rotateZ(40deg)' },
					'50%': { transform: 'rotateZ(10deg)' },
					'70%': { transform: 'rotateZ(0deg)' }
				},
				horns: {
					'0%': { transform: 'perspective(50px) rotateX(0deg) rotateY(0deg)' },
					'20%': { transform: 'perspective(50px) rotateX(30deg) rotateY(0deg)' },
					'30%': { transform: 'perspective(50px) rotateX(-50deg) rotateY(0deg)' }, // 1
					'40%': { transform: 'perspective(50px) rotateX(-30deg) rotateY(0deg)' }, // b
					'50%': { transform: 'perspective(50px) rotateX(-50deg) rotateY(0deg)' }, // 2
					'60%': { transform: 'perspective(50px) rotateX(-30deg) rotateY(0deg)' }, // 3
					'70%': { transform: 'perspective(50px) rotateX(-50deg) rotateY(0deg)' }, // b
					'80%': { transform: 'perspective(50px) rotateX(-30deg) rotateY(0deg)' }, // 4
					'90%': { transform: 'perspective(50px) rotateX(-50deg) rotateY(0deg)' }, // b
					'100%': { transform: 'perspective(50px) rotateX(0deg) rotateY(0deg)' } // b
				},
				peace: {
					'0%': { transform: 'rotate(0deg)' },
					'20%': { transform: 'rotate(36deg)' },
					'50%': { transform: 'rotate(-32deg)' },
					'75%': { transform: 'rotate(15deg)' },
					'90%': { transform: 'rotate(0deg)' }
				},
				wave: {
					'0%': { transform: 'rotate(0deg)' },
					'10%': { transform: 'rotate(15deg)' },
					'20%': { transform: 'rotate(-5deg)' },
					'30%': { transform: 'rotate(15deg)' },
					'40%': { transform: 'rotate(-5deg)' },
					'50%': { transform: 'rotate(10deg)' },
					'60%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(0deg)' }
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				flicker: {
					// '0%, 19.99%, 22%, 32.99%, 34%, 34.99%, 42%, 84%': {
					// 	opacity: '100',
					// 	color: '#ffeef0',
					// 	textShadow: `-0.2rem -0.2rem 1rem #f40,
					// 	0.2rem 0.2rem 1rem #f40,
					// 	0 0 2rem #f40,
					// 	0 0 4rem #f40,
					// 	0 0 6rem #f40,
					// 	0 0 8rem #f40,
					// 	0 0 10rem #f40`
					// },
					// // '20%, 24%, 55%': {
					// '20%, 21.99%, 33%, 33.99%, 35%, 41.99%, 83.99%': {
					// 	opacity: '45',
					// 	color: '#666',
					// 	textShadow: 'none'
					// }
					'0%, 66%, 92%': {
						opacity: '100',
						color: '#ffeef0',
						textShadow: `-0.2rem -0.2rem 1rem #f40,
						0.2rem 0.2rem 1rem #f40,
						0 0 2rem #f40,
						0 0 4rem #f40,
						0 0 6rem #f40,
						0 0 8rem #f40,
						0 0 10rem #f40`
					},
					'42%, 80%, 98%': {
						opacity: '45',
						color: '#666',
						textShadow: 'none'
					}
				}
			},
			animation: {
				fingerguns: 'fingerguns 1s ease-in-out infinite forwards',
				horns: 'horns 2s ease-in-out infinite alternate forwards',
				peace: 'peace 1s ease-in-out infinite forwards',
				wave: 'wave 1s ease-in-out infinite forwards',
				wiggle: 'wiggle 1s ease-in-out infinite',
				flicker: 'flicker 2s linear infinite alternate forwards'
			}
		},
		// colors: {},
		container: {
			center: true
		}
	},

	plugins: []
};

module.exports = config;
