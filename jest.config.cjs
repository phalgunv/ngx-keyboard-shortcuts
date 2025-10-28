module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|js|html)$': ['ts-jest']
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
  modulePathIgnorePatterns: ['/dist/'],
  moduleNameMapper: {
    '^ngx-keyboard-shortcuts$': '<rootDir>/src/index.ts'
  }
};
