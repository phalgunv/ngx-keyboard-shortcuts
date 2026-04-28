import {
    Directive,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ElementRef,
    inject
} from '@angular/core';

import { KeyboardShortcutService } from './keyboard-shortcut.service';
import {
    IListenerHandle,
    IKeyboardShortcutListenerOptions,
    IKeyboardShortcutListenerConstructorObject
} from './libraries/listener.library';

@Directive({
    selector: '[ngx-keyboard-shortcut]',
    standalone: true
})
export class KeyboardShortcutDirective implements OnInit, OnDestroy {
    @Input() public keyboardShortcut: IKeyboardShortcutListenerOptions;

    @Input() public fireClickEventOnKeyboardShortcut = true;

    @Output() public keyboardShortcutTriggered = new EventEmitter<KeyboardEvent>();

    private listener: IListenerHandle;

    private elRef = inject(ElementRef);
    private keyboardShortcutService = inject(KeyboardShortcutService);

    public ngOnInit(): void {
        if (!this.keyboardShortcut) {
            return;
        }

        const listenerConstructor = {} as IKeyboardShortcutListenerConstructorObject;
        Object.assign(
            listenerConstructor,
            { handler: this.keyboardShortcutHandler.bind(this) },
            this.keyboardShortcut
        );
        this.listener = this.keyboardShortcutService.listen(
            listenerConstructor
        );
    }

    private keyboardShortcutHandler(event: KeyboardEvent): void {
        if (this.fireClickEventOnKeyboardShortcut) {
            if (
                this.elRef &&
                this.elRef.nativeElement &&
                this.elRef.nativeElement.click
            ) {
                this.elRef.nativeElement.click();
            }
        }
        this.keyboardShortcutTriggered.emit(event);
    }

    public ngOnDestroy(): void {
        if (this.listener) {
            this.listener.remove();
        }
    }
}
