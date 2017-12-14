import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HeaderComponent } from './header/header.component';

import { ProductService } from './service/product/product.service';
import { NewproductService } from './service/product/newproduct.service';
import { CustomerComponent } from './customer/customer.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    DepartmentComponent,
    EmployeeListComponent,
    DepartmentListComponent,
    ProductComponent,
    ProductListComponent,
    HeaderComponent,
    CustomerComponent,
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // ProductService, shortcut
    { provide: ProductService, useClass: NewproductService }
  ],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
