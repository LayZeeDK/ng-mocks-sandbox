import { ChangeDetectionStrategy, Component, NgModule, OnInit } from '@angular/core';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  public list: Todo[] = [];

  constructor(protected service: TodoService) {}

  ngOnInit(): void {
    // Never do like that.
    // It is just for the demonstration purposes.
    this.service.list$().subscribe((list) => (this.list = list));
  }
}

@NgModule({
  declarations: [TodoComponent],
  exports: [TodoComponent],
})
export class TodoScam {}
