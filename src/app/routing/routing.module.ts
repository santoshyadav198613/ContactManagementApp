import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomerComponent } from '../customer/customer.component';
import { DepartmentComponent } from '../department/department.component';
import { ProductComponent } from '../product/product.component';
import { TodoComponent } from '../todo/todo.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { TodoDetailsComponent } from '../todo/todo-details/todo-details.component';
import { ProductDetailsComponent } from '../product/product-details/product-details.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../service/guard/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        { path: 'customer', component: CustomerComponent , canActivate: [AuthGuard] },
        { path: 'department', component: DepartmentComponent ,canActivate: [AuthGuard]  },
        { path: 'product', component: ProductComponent ,canActivate: [AuthGuard] },
        { path: 'product/:id', component: ProductDetailsComponent  },
        { path: 'login', component: LoginComponent },
        { path: 'todo', loadChildren : '../todo/todo.module#TodoModule' },
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: '**', component: PagenotfoundComponent }
      ]
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
