import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockProvider, ngMocks } from 'ng-mocks';
import { EMPTY } from 'rxjs';

import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';

describe(TodoComponent.name, () => {
  beforeAll(() => {
    ngMocks.autoSpy('jasmine');
    ngMocks.defaultMock(TodoService, () => ({
      getTodos: jasmine.createSpy('getTodos').and.returnValue(EMPTY),
    }));
  });

  afterAll(() => {
    ngMocks.autoSpy('reset');
  });

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
