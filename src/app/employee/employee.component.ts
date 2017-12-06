import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  // template: '<h1>Employee from template tag</h1>',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  empName: string = 'Deepak';

  constructor() { }

}





