import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { ProductModule } from './product/product.module';

import { SharedModule } from './shared/shared.module';
import { TodoModule } from './todo/todo.module';

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
// import { TodoComponent } from './todo/todo.component';
// import { TodoListComponent } from './todo/todo-list/todo-list.component';

import { ApiinterceptorService } from './interceptor/apiinterceptor.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './service/login/login.service';
import { AuthGuard } from './service/guard/auth.guard';

import { APPCONFIG , AppConstants } from './service/valueProvider/valueProvider';
// import { PasswordValidatorDirective } from './customDirective/password-validator.directive';
// import { HoverDirective } from './customDirective/hover.directive';
// import { PricePipe } from './customPipes/price.pipe';
// import { CompletedPipe } from './customPipes/completed.pipe';

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
    // TodoComponent,
    // TodoListComponent,
    PagenotfoundComponent,
    LoginComponent
    // PasswordValidatorDirective
    // HoverDirective
    // PricePipe
    // CompletedPipe
  ],
  imports: [
    BrowserModule,
    SharedModule,
    // FormsModule,
    // ReactiveFormsModule,
    // HttpClientModule,
    ProductModule,
    // TodoModule,
    RoutingModule
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
    LoginService,AuthGuard,
    { provide: ProductService, useClass: NewproductService },
    { provide : APPCONFIG , useValue : AppConstants },
    { provide: HTTP_INTERCEPTORS, useClass: ApiinterceptorService, multi: true }
  ],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
