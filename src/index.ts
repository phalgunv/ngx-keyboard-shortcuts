import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeyboardShortcutService } from './keyboard-shortcut.service';
import { KeyboardShortcutDirective } from './keyboard-shortcut.directive';

@NgModule({
    imports: [CommonModule, KeyboardShortcutDirective],
    exports: [KeyboardShortcutDirective]
})
export class NgxKeyboardShortcutModule {}

// Re-export public API so the entrypoint exposes all symbols
export * from './public_api';
