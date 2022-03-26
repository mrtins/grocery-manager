// jest.config.js
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
  },
  // Add more setup options before each test is run
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/pages/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/hooks/**/*.{js,jsx,ts,tsx}',
    '!**/.next/**',
  ],
};
