import { Component, OnInit, Input , EventEmitter , Output , OnChanges ,SimpleChanges } from '@angular/core';

import { Department } from '../department';

@Component({
  selector: 'con-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnChanges  {
  @Input() departments: Department[];
  @Output() selectDepartment : EventEmitter<Department> = new EventEmitter<Department>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
  }
  sendSelected(department: Department){
    console.log(department);
    this.selectDepartment.emit(department);
  }

}
