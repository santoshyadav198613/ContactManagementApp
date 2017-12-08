import { Component, Input, Output , EventEmitter } from '@angular/core';
import { Employee } from '../employee';
@Component({
  selector: 'con-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  @Input() employee: Employee[];
  @Input() headerText: string;
  @Output() selectedEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();
  constructor() { }

  sendEmloyee(emp: Employee) {
      this.selectedEmployee.emit(emp);
  }


}
