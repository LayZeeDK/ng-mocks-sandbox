import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';

import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';

describe(TodoComponent.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoComponent],
      providers: [MockProvider(TodoService)],
    });
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
