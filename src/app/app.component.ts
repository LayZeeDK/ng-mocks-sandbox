import { Component, NgModule } from '@angular/core';

import { TodoScam } from './todo/todo.component';

@Component({
  selector: 'app-root',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `<app-todo></app-todo>`,
})
export class AppComponent {}

@NgModule({
  declarations: [AppComponent],
  exports: [AppComponent],
  imports: [TodoScam],
})
export class AppScam {}
