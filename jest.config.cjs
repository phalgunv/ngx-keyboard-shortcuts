module.exports = {
  preset: 'jest-preset-angular',
  setupFiles: ['<rootDir>/setup-reflect.ts'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|js|html)$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json', isolatedModules: false }]
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      diagnostics: false
    }
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/', '<rootDir>/src/test/test.ts', '<rootDir>/src/test/app.spec.ts'],
  modulePathIgnorePatterns: ['/dist/'],
  moduleNameMapper: {
    '^ngx-keyboard-shortcuts$': '<rootDir>/src/index.ts'
  }
};
