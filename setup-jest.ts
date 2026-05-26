import { jest as _jest } from '@jest/globals';
// Ensure reflect-metadata is loaded so Angular's DI sees design:paramtypes
import 'reflect-metadata';
// Initialize Angular testing environment manually to avoid using jest-preset-angular's transformer
import 'zone.js';
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

// Initialize the Angular testing environment
getTestBed().initTestEnvironment(
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting()
);

// Provide a jasmine-like spyOn global for tests that use the older Jasmine API
(global as any).spyOn = (obj: any, method: string) => _jest.spyOn(obj, method);
// expose the jest instance for tests that need to clear/reset mocks
(globalThis as any)._jest = _jest;
