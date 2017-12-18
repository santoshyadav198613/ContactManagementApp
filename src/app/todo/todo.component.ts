import { Component, OnInit } from '@angular/core';

import { TodoService } from '../service/todo/todo.service';
import { ToDo } from '../service/todo/todo';

@Component({
  selector: 'con-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
  // ,
  // providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todo: ToDo = new ToDo();
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  saveTodo() {
    this.todoService.addTodo(this.todo).subscribe(
      (data) => {
        console.log(data);
        this.todo = new ToDo();
      },
      (err) => console.log(err)
    )
  }

}
