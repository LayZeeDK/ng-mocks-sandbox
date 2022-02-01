export interface Todo {
  readonly id: string;
  readonly text: string;
}

export type Todos = readonly Todo[];
