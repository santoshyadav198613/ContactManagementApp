import { Component, OnInit, ViewChild, ViewChildren, QueryList, DoCheck ,OnDestroy} from '@angular/core';

import { ProductListComponent } from './product-list/product-list.component';

import { Product } from './product';

@Component({
  selector: 'con-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @ViewChild(ProductListComponent)
  productListComponent: ProductListComponent;

  @ViewChildren(ProductListComponent)
  productChildrenComponent: QueryList<ProductListComponent>;
  products: Product[] = [];
  constructor() { }

  ngOnInit(): void {
    this.products = [
      { id: 1, name: 'HD TV', price: 1000, mfd: new Date('11-oct-2015') },
      { id: 2, name: '2 ton AC', price: 2000, mfd: new Date('11-oct-2016') },
      { id: 3, name: 'Refigerator', price: 5000, mfd: new Date('11-oct-2017') }
    ];
    this.productListComponent.productList = this.products;

  }

  ngDoCheck(): void {
    console.log(this.products);
    console.log('this is do check event');
  }

  sendProduct() {
    this.products = [
      { id: 1, name: 'HD TV', price: 1000, mfd: new Date('11-oct-2015') },
      { id: 2, name: '2 ton AC', price: 2000, mfd: new Date('11-oct-2016') },
      { id: 3, name: 'Refigerator', price: 5000, mfd: new Date('11-oct-2017') }
    ];
    // this.productListComponent.productList = this.products;

    console.log(this.productChildrenComponent);

    this.productChildrenComponent.forEach(
      (productComponent) => productComponent.productList = this.products
    )

  }

  ngOnDestroy(): void{
    alert('Are you sure you want to close this component');
  }

}
