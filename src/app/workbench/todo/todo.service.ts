import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  add(payload: Todo): Observable<any> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', payload);
  }

  put(payload: Todo, id: number): Observable<any> {
    return this.http.put<Todo>('https://jsonplaceholder.typicode.com/todos/' + id, payload);
  }

  remove(id: number): Observable<any> {
    return this.http.delete('https://jsonplaceholder.typicode.com/todos/' + id);
  }

}
