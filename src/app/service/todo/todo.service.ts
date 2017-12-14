import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ToDo } from './todo';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodoData() {
    return this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos');
  }

}
