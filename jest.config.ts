const exportData = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	collectCoverageFrom: [
		'**/*.{js,jsx,ts,tsx}',
		'!**/*.d.ts',
		'!**/node_modules/**',
	],
	moduleNameMapper: {
		/* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
		'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

		// Handle CSS imports (without CSS modules)
		'^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

		/* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
		'^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
	},
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
	testEnvironment: 'jsdom',
	transform: {
		/* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
	},
	testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
	transformIgnorePatterns: [
		'/node_modules/',
		'^.+\\.module\\.(css|sass|scss)$',
	],
	roots: ['<rootDir>/src'],
};

export default exportData;

// Config from https://basarat.gitbook.io/typescript/intro-1/jest
//
// module.exports = {
// 	roots: ['<rootDir>/src'],
// 	testMatch: [
// 		'**/__tests__/**/*.+(ts|tsx|js)',
// 		'**/?(*.)+(spec|test).+(ts|tsx|js)',
// 	],
// 	transform: {
// 		'^.+\\.(ts|tsx)$': 'ts-jest',
// 	},
// };
