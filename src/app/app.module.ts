import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
