import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ToDo } from './todo';
import { TodoService } from './todo.service';

@Injectable()
export class TodoResolveGuard implements Resolve<ToDo[]>  {

  constructor(private todoService: TodoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ToDo[]> | Promise<ToDo[]> | ToDo[] {
    return this.todoService.getTodoData();
  }
}
