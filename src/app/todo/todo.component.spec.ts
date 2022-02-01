import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ngMocks } from 'ng-mocks';
import { EMPTY } from 'rxjs';

import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';

describe(TodoComponent.name, () => {
  beforeAll(() => {
    ngMocks.autoSpy('jasmine');
    ngMocks.defaultMock(TodoService, () => ({
      list$: jasmine.createSpy('list$').and.returnValue(EMPTY),
    }));
  });

  afterAll(() => {
    ngMocks.autoSpy('reset');
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoComponent],
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
