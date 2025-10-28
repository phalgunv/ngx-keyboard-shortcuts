module.exports = {
  preset: 'ng-jest/presets/defaults',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|js|html)$': ['ts-jest', { tsconfig: 'tsconfig.spec.json' }]
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
  modulePathIgnorePatterns: ['/dist/'],
  moduleNameMapper: {
    '^ngx-keyboard-shortcuts$': '<rootDir>/src/index.ts'
  }
};
};
