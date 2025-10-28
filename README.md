# @phalgunv/ngx-keyboard-shortcuts

> ⚠️ **Maintained Fork**: This is an actively maintained fork of the original [`ngx-keyboard-shortcuts`](https://github.com/milestechnologies/ngx-keyboard-shortcuts) package (now archived). This fork adds Angular 16+ support with modern tooling.

[![npm version](https://badge.fury.io/js/%40phalgunv%2Fngx-keyboard-shortcuts.svg)](https://www.npmjs.com/package/@phalgunv/ngx-keyboard-shortcuts)

By using simple directives ngx-keyboard-shortcuts allows you to create and implement custom keybindings events in your Angular applications.

## Requirements

- **Angular**: 16+ (for v2.x)
- **Node.js**: 18+ 
- **TypeScript**: 5.x

> **Note**: For Angular 10-15, use v1.x of this package.

## Installation

```bash
## Installation

```bash
npm install @phalgunv/ngx-keyboard-shortcuts --save
```

## Quick Start

**Example:**

```html
<button [keyboardShortcut]="keyboardShortcutDef" (click)="save()">
    Save
</button>
```

```typescript
keyboardShortcutDef: IKeyboardShortcutListenerOptions = {
    description: 'save',
    keyBinding: [KeyboardKeys.Ctrl, KeyboardKeys.Shift, 's']
};
```

### Usage

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxKeyboardShortcutModule } from '@phalgunv/ngx-keyboard-shortcuts';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxKeyboardShortcutModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Demos

see the demo site [https://milestechnologies.github.io/ngx-keyboard-shortcuts](https://milestechnologies.github.io/ngx-keyboard-shortcuts)

## Contributing

### Development Setup

```bash
npm install
npm start  # Run the demo environment
```

### Testing and Linting

```bash
npm test        # Run Jest tests
npm run lint    # Run ESLint
```

### Building

```bash
npm run build   # Build the library package
```

## Built With

-   [Angular 16](https://angular.io/) - The web framework
-   [TypeScript 5](https://www.typescriptlang.org/) - Programming language
-   [Jest](https://jestjs.io/) - Testing framework
-   [ESLint](https://eslint.org/) - Code quality tool

## Version

2.0.0-beta.3

## Migration from v1.x

If you're upgrading from v1.x:
- Angular 16+ is now required
- Node.js 18+ is required
- Peer dependencies updated to `@angular/core` and `@angular/common` ^16.0.0

For detailed migration information, see [CHANGELOG.md](./CHANGELOG.md).

## Contributors

Thank you to the [contributors](https://github.com/milestechnologies/ngx-keyboard-shortcuts/graphs/contributors) of this package.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/milestechnologies/ngx-keyboard-shortcuts/blob/master/LICENSE) file for details.
