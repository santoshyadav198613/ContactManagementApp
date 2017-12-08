import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    DepartmentComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
