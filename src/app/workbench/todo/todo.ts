import {Action, Selector, State, StateContext} from '@ngxs/store';
import {tap} from 'rxjs/operators';
import {TodoService} from './todo.service';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export class AddTodo {
  static readonly type = '[Todo] Add';

  constructor(public payload: Todo) {
  }
}

export class GetTodos {
  static readonly type = '[Todo] Get';
}

export class UpdateTodo {
  static readonly type = '[Todo] Update';

  constructor(public payload: Todo, public id: number) {
  }
}

export class DeleteTodo {
  static readonly type = '[Todo] Delete';

  constructor(public id: number) {
  }
}

export class SetSelectedTodo {
  static readonly type = '[Todo] Set';

  constructor(public payload: Todo) {
  }
}

export class TodoStateModel {
  todos: Todo[];
  selectedTodo: Todo;
}

@State<TodoStateModel>({
  name: 'todos',
  defaults: {
    todos: [],
    selectedTodo: null
  }
})
export class TodoState {

  constructor(private todoService: TodoService) {
  }

  @Selector()
  // tslint:disable-next-line:typedef
  static getTodoList(state: TodoStateModel) {
    return state.todos;
  }

  @Selector()
  // tslint:disable-next-line:typedef
  static getSelectedTodo(state: TodoStateModel) {
    return state.selectedTodo;
  }

  @Action(GetTodos)
  // tslint:disable-next-line:typedef
  getTodos({getState, setState}: StateContext<TodoStateModel>) {
    return this.todoService.findAll().pipe(tap((result) => {
      const state = getState();
      setState({
        ...state,
        todos: result,
      });
    }));
  }

  @Action(AddTodo)
  // tslint:disable-next-line:typedef
  addTodo({getState, patchState}: StateContext<TodoStateModel>, {payload}: AddTodo) {
    return this.todoService.add(payload).pipe(tap((result) => {
      const state = getState();
      patchState({
        todos: [...state.todos, result]
      });
    }));
  }

  @Action(UpdateTodo)
  // tslint:disable-next-line:typedef
  updateTodo({getState, setState}: StateContext<TodoStateModel>, {payload, id}: UpdateTodo) {
    return this.todoService.put(payload, id).pipe(tap((result) => {
      const state = getState();
      const todoList = [...state.todos];
      const todoIndex = todoList.findIndex(item => item.id === id);
      todoList[todoIndex] = result;
      setState({
        ...state,
        todos: todoList,
      });
    }));
  }

  @Action(DeleteTodo)
  // tslint:disable-next-line:typedef
  deleteTodo({getState, setState}: StateContext<TodoStateModel>, {id}: DeleteTodo) {
    return this.todoService.remove(id).pipe(tap(() => {
      const state = getState();
      const filteredArray = state.todos.filter(item => item.id !== id);
      setState({
        ...state,
        todos: filteredArray,
      });
    }));
  }

  @Action(SetSelectedTodo)
  // tslint:disable-next-line:typedef
  setSelectedTodoId({getState, setState}: StateContext<TodoStateModel>, {payload}: SetSelectedTodo) {
    const state = getState();
    setState({
      ...state,
      selectedTodo: payload
    });
  }
}
