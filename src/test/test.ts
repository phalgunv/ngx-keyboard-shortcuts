// This file was previously used by Karma, now only used for Jest test bootstrap guard

import 'zone.js/testing';
import 'zone.js';
import 'zone.js/dist/sync-test';
import { getTestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// When running under Jest, jest-preset-angular's setup already initializes
// the testing environment. Skip this bootstrap to avoid double-init.
// This file is only needed for potential future compatibility.
if (!process.env.JEST_WORKER_ID) {
    // First, initialize the Angular testing environment.
    getTestBed().initTestEnvironment(
        BrowserDynamicTestingModule,
        platformBrowserDynamicTesting(), {
        teardown: { destroyAfterEach: false }
    }
    );
}
