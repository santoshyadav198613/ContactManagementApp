import { Component, OnInit } from '@angular/core';

import { Department } from './department';

@Component({
  selector: 'con-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departmentList: Department[] = [
    { id: 1, name: 'IT', head: 'Vikas', employeeCount: 100 },
    { id: 2, name: 'Marketing', head: 'Deepak', employeeCount: 200 },
    { id: 3, name: 'Operations', head: 'Sreejith', employeeCount: 300 },
    { id: 4, name: 'Banking', head: 'Santosh', employeeCount: 50 }
  ];

  department: Department =new Department();
  constructor() { }

  ngOnInit() {
  }

  receiveDepartment(department: Department){
   this.department = department;
  }

}
