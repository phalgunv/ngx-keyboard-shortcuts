// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import 'zone.js';
import 'zone.js/dist/sync-test';
import { getTestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// When running under Jest, jest-preset-angular's setup already initializes
// the testing environment. Skip the Karma bootstrap to avoid double-init.
if (!process.env.JEST_WORKER_ID) {
    // First, initialize the Angular testing environment.
    getTestBed().initTestEnvironment(
        BrowserDynamicTestingModule,
        platformBrowserDynamicTesting(), {
        teardown: { destroyAfterEach: false }
    }
    );
}
