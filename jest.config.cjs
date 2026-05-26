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
  modulePathIgnorePatterns: ['/dist/', '<rootDir>/src/package\.json$'],
  moduleNameMapper: {
    '^@phalgunv/ngx-keyboard-shortcuts$': '<rootDir>/src/index.ts',
    '^@angular/core/testing$': '<rootDir>/node_modules/@angular/core/fesm2022/testing.mjs',
    '^@angular/platform-browser-dynamic/testing$': '<rootDir>/node_modules/@angular/platform-browser-dynamic/fesm2022/testing.mjs'
  },
  haste: {
    throwOnModuleCollision: false
  }
};
