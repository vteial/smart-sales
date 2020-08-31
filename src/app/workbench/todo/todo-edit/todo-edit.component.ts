import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Select, Store} from '@ngxs/store';
import {Observable, Subscription} from 'rxjs';
import {AddTodo, SetSelectedTodo, Todo, TodoState, UpdateTodo} from '../todo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit, OnDestroy {

  @Select(TodoState.getSelectedTodo)
  selectedTodo: Observable<Todo>;

  editTodo = false;

  todoForm: FormGroup;

  private formSubscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private store: Store, private route: ActivatedRoute, private router: Router) {
    this.createForm();
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.formSubscription.add(
      this.selectedTodo.subscribe(todo => {
        if (todo) {
          this.todoForm.patchValue({
            id: todo.id,
            userId: todo.userId,
            title: todo.title
          });
          this.editTodo = true;
        } else {
          this.editTodo = false;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }

  // tslint:disable-next-line:typedef
  createForm() {
    this.todoForm = this.fb.group({
      id: [''],
      userId: ['', Validators.required],
      title: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.editTodo) {
      this.formSubscription.add(
        this.store.dispatch(new UpdateTodo(this.todoForm.value, this.todoForm.value.id)).subscribe(() => {
          this.clearForm();
        })
      );
    } else {
      this.formSubscription.add(
        this.formSubscription = this.store.dispatch(new AddTodo(this.todoForm.value)).subscribe(() => {
          this.clearForm();
        })
      );
    }
  }

  // tslint:disable-next-line:typedef
  clearForm() {
    this.todoForm.reset();
    this.store.dispatch(new SetSelectedTodo(null));
  }
}
