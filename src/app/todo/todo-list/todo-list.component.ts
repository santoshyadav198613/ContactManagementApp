import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../service/todo/todo.service';

import { ToDo } from '../../service/todo/todo';
import { HttpEventType, HttpResponse } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'con-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: ToDo[];
  constructor(private todoService: TodoService,
    private route: ActivatedRoute) { }

  ngOnInit() {

      this.route.data.subscribe(
        (data) => this.todoList = data['todoList']
      );
    // this.todoService.getTodoData().subscribe(
    //   (data) => this.todoList = data,
    //   (err) => console.log(err)
    // );

    this.todoService.getPhotos().subscribe(
      (event) => {
        if (event.type === HttpEventType.Sent) {
          console.log('request sent tp api');
        }
        else if (event.type === HttpEventType.DownloadProgress) {
          console.log(event.loaded);
          console.log(event.total);
        }
        else if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      },
      (err) => console.log(err)
    )
  }

}
