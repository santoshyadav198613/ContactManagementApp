import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from '../service/todo/todo.service';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

import { AuthGuard } from '../service/guard/auth.guard';
import { TodoResolveGuard } from '../service/todo/todo-resolve.guard';

import { todoProvider } from '../service/todo/todo.factory';
import { LoginService } from '../service/login/login.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: TodoComponent, canActivate: [AuthGuard],
        resolve: {
          todoList: TodoResolveGuard
        }, 
        canActivateChild: [AuthGuard],
        children: [
          { path: ':id', component: TodoDetailsComponent }
        ]
      }
      // { path: ':id', component: TodoDetailsComponent }
    ])
  ],
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoDetailsComponent
  ],
  providers: [
    // TodoService
    { provide : TodoService , useFactory : todoProvider , deps: [LoginService, HttpClient] }
    , TodoResolveGuard]
})
export class TodoModule { }
