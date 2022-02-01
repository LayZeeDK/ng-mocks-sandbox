import { Injectable } from '@angular/core';
import { asyncScheduler, BehaviorSubject, Observable, scheduled } from 'rxjs';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  #list = new BehaviorSubject([]);

  list$(): Observable<Todo[]> {
    return scheduled(this.#list, asyncScheduler);
  }
}
