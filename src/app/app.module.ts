import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { ProductModule } from './product/product.module';

import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
// import { ProductComponent } from './product/product.component';
// import { ProductListComponent } from './product/product-list/product-list.component';
import { HeaderComponent } from './header/header.component';

import { ProductService } from './service/product/product.service';
import { NewproductService } from './service/product/newproduct.service';
import { CustomerComponent } from './customer/customer.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

import { ApiinterceptorService } from './interceptor/apiinterceptor.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    DepartmentComponent,
    EmployeeListComponent,
    DepartmentListComponent,
    // ProductComponent,
    // ProductListComponent,
    HeaderComponent,
    CustomerComponent,
    TodoComponent,
    TodoListComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule,
    ProductModule
    // RouterModule.forRoot(
    //   [
    //     { path: 'customer', component: CustomerComponent },
    //     { path: 'department', component: DepartmentComponent },
    //     { path: 'product', component: ProductComponent },
    //     { path: 'todo', component: TodoComponent },
    //     { path: '', redirectTo: 'product', pathMatch: 'full' },
    //     { path: '**', component: PagenotfoundComponent }
    //   ]
    // )
  ],
  providers: [
    // ProductService, shortcut
    { provide: ProductService, useClass: NewproductService },
    { provide: HTTP_INTERCEPTORS, useClass: ApiinterceptorService, multi: true }
  ],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
