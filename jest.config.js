// module.exports = {
//   testEnvironment: 'jsdom',
//   testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
//   setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
//   transform: {
//     '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
//   },
//   collectCoverageFrom: [
//     '<rootDir>/components/**/*.js',
//     '<rootDir>/pages/**/*.js',
//     '<rootDir>/hooks/**/*.js',
//     '<rootDir>/store/**/*.js',
//   ],
//   watchPlugins: [
//     'jest-watch-typeahead/filename',
//     'jest-watch-typeahead/testname',
//   ],
// };

// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  // collectCoverageFrom: [
  //   '<rootDir>/components/**/*.js',
  //   '<rootDir>/pages/**/*.js',
  //   '<rootDir>/hooks/**/*.js',
  //   '<rootDir>/store/**/*.js',
  // ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
