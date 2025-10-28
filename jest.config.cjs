module.exports = {
  // Do not use jest-preset-angular preset to avoid transformer incompatibilities.
  // Use ts-jest directly and initialize Angular TestBed in setup-jest.ts
  setupFiles: ['<rootDir>/setup-reflect.ts'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|js|mjs|html)$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json', isolatedModules: false }]
  },
  // Transform Angular and zone.js packages inside node_modules (they ship ESM) so Jest can parse them
  transformIgnorePatterns: ['node_modules/(?!(?:@angular|zone.js)/)'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      diagnostics: false
    }
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'mjs', 'json'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/', '<rootDir>/src/test/test.ts', '<rootDir>/src/test/app.spec.ts'],
  modulePathIgnorePatterns: ['/dist/'],
  moduleNameMapper: {
    '^@phalgunv/ngx-keyboard-shortcuts$': '<rootDir>/src/index.ts'
  }
};
