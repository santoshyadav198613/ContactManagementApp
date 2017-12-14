import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../service/todo/todo.service';

import { ToDo } from '../../service/todo/todo';

@Component({
  selector: 'con-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: ToDo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {

    this.todoService.getTodoData().subscribe(
      (data) => this.todoList = data,
      (err) => console.log(err)
    )
  }

}
