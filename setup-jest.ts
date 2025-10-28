import { jest as _jest } from '@jest/globals';
// Ensure reflect-metadata is loaded so Angular's DI sees design:paramtypes
import 'reflect-metadata';
import 'jest-preset-angular/setup-jest';
// Force production mode for tests so isDevMode() === false and dev-only warnings don't run
// Note: do not enable production mode here because some tests assert dev-only warnings

// Provide a jasmine-like spyOn global for tests that use the older Jasmine API
// Many existing tests call spyOn(...) — map it to jest.spyOn so they work unchanged.
(global as any).spyOn = (obj: any, method: string) => _jest.spyOn(obj, method);
// expose the jest instance for tests that need to clear/reset mocks
(globalThis as any)._jest = _jest;
