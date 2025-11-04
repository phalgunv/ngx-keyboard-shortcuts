import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirectiveButtonDemoComponent } from './components/directive-button-demo.component';
import { BlacklistedShortcutsComponent } from './components/blacklisted-keys-demo.component';
import { ComponentKeybindingDemoComponent } from './components/component-keybinding-demo.component';

const appRoutes: Routes = [
    {
        component: ComponentKeybindingDemoComponent,
        path: 'component-keybinding-demo'
    },
    {
        component: DirectiveButtonDemoComponent,
        path: 'directive-button-demo'
    },
    {
        component: BlacklistedShortcutsComponent,
        path: 'blacklisted-key-demo'
    },
    {
        redirectTo: 'directive-button-demo',
        path: '**'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
