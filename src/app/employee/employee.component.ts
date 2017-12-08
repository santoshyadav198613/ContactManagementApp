import { Component, OnInit } from '@angular/core';

import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  // template: '<h1>Employee from template tag</h1>',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  empName: string = 'Deepak';
  lastName: string = 'Test';
  empId: number = 1;
  visible: boolean = false;
  employeeList: Employee[] = [
    { id: 1, name: 'Jay', address: 'Mumbai', dob: new Date('12-Nov-1986'), salary: 45000 },
    { id: 2, name: 'Deepak', address: 'Mumbai', dob: new Date('12-Nov-1988'), salary: 55000 },
    { id: 3, name: 'pushplatha', address: 'Mumbai', dob: new Date('12-Nov-1989'), salary: 65000 },
    { id: 4, name: 'Shawn', address: 'Mumbai', dob: new Date('12-Nov-1987'), salary: 75000 },
    { id: 5, name: 'Vijay', address: 'Mumbai', dob: new Date('12-Nov-1985'), salary: 85000 },
  ];
  empRole: string = 'Super Admin';
  // employeeList : Array<Employee> = 
  empFromChild: Employee= new Employee();
  constructor() { }


  toggle() {
    this.visible = !this.visible;
  }


  employeefromChild(emp: Employee) {
    this.empFromChild = emp;
  }
}





