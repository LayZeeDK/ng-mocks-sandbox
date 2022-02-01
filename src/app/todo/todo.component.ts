import { Component, NgModule, OnInit } from '@angular/core';

import { Todos } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `<p>todo works!</p>`,
})
export class TodoComponent implements OnInit {
  public list: Todos = [];

  constructor(protected service: TodoService) {}

  ngOnInit(): void {
    // Never do like that.
    // It is just for the demonstration purposes.
    this.service.getTodos().subscribe((list) => (this.list = list));
  }
}

@NgModule({
  declarations: [TodoComponent],
  exports: [TodoComponent],
})
export class TodoScam {}
