import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeyboardShortcutService } from './keyboard-shortcut.service';
import { KeyboardShortcutDirective } from './keyboard-shortcut.directive';

@NgModule({
    declarations: [KeyboardShortcutDirective],
    exports: [KeyboardShortcutDirective],
    imports: [CommonModule]
})
export class NgxKeyboardShortcutModule {}

// Re-export public API so the entrypoint exposes all symbols
export * from './public_api';
