import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomerComponent } from '../customer/customer.component';
import { DepartmentComponent } from '../department/department.component';
import { ProductComponent } from '../product/product.component';
import { TodoComponent } from '../todo/todo.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        { path: 'customer', component: CustomerComponent },
        { path: 'department', component: DepartmentComponent },
        { path: 'product', component: ProductComponent },
        { path: 'todo', component: TodoComponent },
        { path: '', redirectTo: 'product', pathMatch: 'full' },
        { path: '**', component: PagenotfoundComponent }
      ]
    )
  ],
  exports : [RouterModule],
  declarations: []
})
export class RoutingModule { }
