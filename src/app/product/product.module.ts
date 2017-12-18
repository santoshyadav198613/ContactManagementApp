import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
    // FormsModule
  ],
  declarations: [ProductComponent,
    ProductListComponent,
    ProductDetailsComponent]
})
export class ProductModule { }
