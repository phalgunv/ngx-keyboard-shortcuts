const { jest: _jest } = require('@jest/globals');
// Ensure reflect-metadata is loaded so Angular's DI sees design:paramtypes
require('reflect-metadata');
// Initialize Angular testing environment manually to avoid using jest-preset-angular's transformer
require('zone.js');
require('zone.js/testing');
const { getTestBed } = require('@angular/core/testing');
const { BrowserDynamicTestingModule, platformBrowserDynamicTesting } = require('@angular/platform-browser-dynamic/testing');

// Initialize the Angular testing environment
getTestBed().initTestEnvironment(
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting()
);

// Provide a jasmine-like spyOn global for tests that use the older Jasmine API
(global as any).spyOn = (obj: any, method: string) => _jest.spyOn(obj, method);
// expose the jest instance for tests that need to clear/reset mocks
(globalThis as any)._jest = _jest;
