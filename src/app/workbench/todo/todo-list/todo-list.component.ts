import {Component, OnInit} from '@angular/core';
import {DeleteTodo, GetTodos, SetSelectedTodo, Todo, TodoState} from '../todo';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Select(TodoState.getTodoList)
  todos: Observable<Todo[]>;

  constructor(private store: Store) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.store.dispatch(new GetTodos());
  }

  // tslint:disable-next-line:typedef
  editTodo(payload: Todo) {
    this.store.dispatch(new SetSelectedTodo(payload));
  }

  // tslint:disable-next-line:typedef
  deleteTodo(id: number) {
    this.store.dispatch(new DeleteTodo(id));
  }

}
