import {
  Component, OnInit, ViewChild, ViewChildren,
  QueryList, DoCheck, OnDestroy, AfterViewInit
} from '@angular/core';

import { NgForm } from '@angular/forms';

import { ProductListComponent } from './product-list/product-list.component';

import { Product } from '../service/product/product';
import { ProductService } from '../service/product/product.service';

@Component({
  selector: 'con-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
  //,
  // providers: [ProductService]
})
export class ProductComponent implements OnInit, DoCheck, AfterViewInit, OnDestroy {
  @ViewChild(ProductListComponent)
  productListComponent: ProductListComponent;

  @ViewChildren(ProductListComponent)
  productChildrenComponent: QueryList<ProductListComponent>;
  products: Product[] = [];
  // productService : ProductService =new ProductService();
  constructor(private productService: ProductService) { }
  product: Product = new Product();
  validationRegex = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';
  message: string;
  ngOnInit(): void {
    console.log(this.productChildrenComponent);
    // this.products = [
    //   { id: 1, name: 'HD TV', price: 1000, mfd: new Date('11-oct-2015') },
    //   { id: 2, name: '2 ton AC', price: 2000, mfd: new Date('11-oct-2016') },
    //   { id: 3, name: 'Refigerator', price: 5000, mfd: new Date('11-oct-2017') }
    // ];
    this.productService.getProducts().subscribe(
      (res) => this.products = res
    );
    this.productListComponent.productList = this.products;

  }

  save(productForm: NgForm): void {
    console.log(this.product);
    this.productService.saveProduct(this.product);
    this.message = "Product saved successfully!"
    this.product = new Product();
    productForm.reset();
  }

  ngDoCheck(): void {
    console.log(this.products);
    console.log('this is do check event');
  }

  ngAfterViewInit(): void {
    console.log(this.productChildrenComponent);
    this.productChildrenComponent.forEach(
      (productComponent) => setTimeout(() => productComponent.productList = this.products, 0)
    )
  }

  sendProduct() {
    // this.products = [
    //   { id: 1, name: 'HD TV', price: 1000, mfd: new Date('11-oct-2015') },
    //   { id: 2, name: '2 ton AC', price: 2000, mfd: new Date('11-oct-2016') },
    //   { id: 3, name: 'Refigerator', price: 5000, mfd: new Date('11-oct-2017') }
    // ];
    // this.productListComponent.productList = this.products;

    console.log(this.productChildrenComponent);

    // this.productChildrenComponent.forEach(
    //   (productComponent) => productComponent.productList = this.products
    // )

  }

  ngOnDestroy(): void {
    alert('Are you sure you want to close this component');
  }

}
