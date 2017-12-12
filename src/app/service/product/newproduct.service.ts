import { Injectable } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './product';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Injectable()
export class NewproductService extends ProductService {

  constructor() {
    super();
  }

  // functionName() : DataType | void

  getProducts(): Observable<Product[]> { //Overrride
    this.products = [
      { id: 1, name: 'HD TV', price: 1000, mfd: new Date('11-oct-2015') },
      { id: 2, name: '2 ton AC', price: 2000, mfd: new Date('11-oct-2016') },
      { id: 3, name: 'Refigerator', price: 5000, mfd: new Date('11-oct-2017') },
      { id: 4, name: 'Headset', price: 10000, mfd: new Date('11-oct-2016') },
      { id: 5, name: 'Laptop', price: 15000, mfd: new Date('11-oct-2017') }
    ]
    return Observable.of(this.products);
  }

  removeProduct() {

  }

  deleteAllProducts(): void {
    this.products = [];
  }

}
