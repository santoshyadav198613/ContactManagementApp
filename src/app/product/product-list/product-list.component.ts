import { Component, OnInit } from '@angular/core';

import { Product } from '../../service/product/product';

@Component({
  selector: 'con-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  amount: number= 0;
  constructor() { }

  ngOnInit() {
  }

}
