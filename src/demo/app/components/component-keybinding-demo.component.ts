import { Component, OnInit, OnDestroy } from '@angular/core';
import {
    KeyboardShortcutService,
    IKeyboardShortcutListenerConstructorObject,
    IListenerHandle,
    KeyboardKeys,
    KeyboardShortcutCombination
} from '../../../../dist';
@Component({
    selector: 'app-component-keybinding-demo',
    templateUrl: './component-keybinding-demo.component.html'
})
export class ComponentKeybindingDemoComponent implements OnInit, OnDestroy {
    listenerServiceCode = `
    ngOnInit(): void {
        // key combination
        const kb = [KeyboardKeys.Ctrl, 'm'];
        // constructor object
        const listenerConstructor = {
            description: 'simple, individual, demo shortcut',
            handler: this.alertMessage.bind(kb),
            keyBinding: kb,
        } as IKeyboardShortcutListenerConstructorObject;
        // assign to handler so we can destroy it later
        this.listener = this.keyboardShortcutService.listen(
            listenerConstructor
        );
    }
    `;
    destroyCode = `
    ngOnDestroy(): void {
        // destroys the listener OnDestroy
        this.listener.remove();
    }
    `;
    // global listener variable
    listener: IListenerHandle | null = null;
    kb = [KeyboardKeys.Ctrl, 'm'];
    info = 'Active Keybinding [' + this.kb[0] + ' + ' + this.kb[1] + ']';
    constructor(private keyboardShortcutService: KeyboardShortcutService) {}

    ngOnInit(): void {
        // constructor object
        const listenerConstructor = {
            description: 'simple, individual, demo shortcut',
            handler: this.alertMessage.bind(this.kb),
            keyBinding: this.kb
        } as IKeyboardShortcutListenerConstructorObject;
        // assign to handler so we can destroy it later
        this.listener = this.keyboardShortcutService.listen(
            listenerConstructor
        );
    }

    ngOnDestroy(): void {
        // destroys the listener OnDestroy
        if (this.listener) {
            this.listener.remove();
        }
    }

    private alertMessage(): void {
        const keyboardCombo = this as unknown as KeyboardShortcutCombination;
        alert(
            'shortcut ' +
                keyboardCombo[0] +
                ' + ' +
                keyboardCombo[1] +
                ' successfully triggered'
        );
    }
}
