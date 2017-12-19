import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { ToDo } from './todo';



@Injectable()
export class TodoService {

  constructor(private isAdmin: boolean, private http: HttpClient) { 
    console.log(isAdmin);
  }

  getTodoData() {
    return this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos',
      { headers: new HttpHeaders().set('token', 'dfdshfghjg45435jhg').set('userToken', 'hgkjfhgkjfdh45645') });
  }

  addTodo(todo: ToDo) {
    return this.http.post<ToDo>('https://jsonplaceholder.typicode.com/todos', todo);
  }

  getPhotos() {
    let request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', { reportProgess: true });
    return this.http.request(request);
  }

}
