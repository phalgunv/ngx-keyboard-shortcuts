module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|js|html)$': ['ts-jest', {
      tsconfig: 'tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$'
    }]
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  testPathIgnorePatterns: ['/dist/','/node_modules/']
  ,
  modulePathIgnorePatterns: ['/dist/']
  ,
  moduleNameMapper: {
    '^ngx-keyboard-shortcuts$': '<rootDir>/package.json'
  }
};
