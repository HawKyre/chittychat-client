module.exports = {
	purge: {
		safelist: [
			'bg-gray-700',
			'bg-gray-500',
			'bg-gray-200',
			'bg-red-700',
			'bg-red-500',
			'bg-red-200',
			'bg-green-700',
			'bg-green-500',
			'bg-green-200',
			'bg-blue-700',
			'bg-blue-500',
			'bg-blue-200',
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require('tailwind-scrollbar')],
};
