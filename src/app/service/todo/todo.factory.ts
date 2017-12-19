import { TodoService } from './todo.service';
import { LoginService } from '../login/login.service';
import { HttpClient } from '@angular/common/http';

export function todoProvider(loginService: LoginService, http: HttpClient) {
    return new TodoService(loginService.isAdmin, http);
}


// export let todoFactory =
//     { provide: TodoService, useFactory: todoProvider, deps: [LoginService,HttpClient ] }