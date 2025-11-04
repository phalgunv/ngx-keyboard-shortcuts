module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  moduleFileExtensions: ['ts', 'html', 'js', 'mjs', 'json'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/', '<rootDir>/src/test/test.ts', '<rootDir>/src/test/app.spec.ts'],
  modulePathIgnorePatterns: ['/dist/'],
  moduleNameMapper: {
    '^@phalgunv/ngx-keyboard-shortcuts$': '<rootDir>/src/index.ts'
  }
};
