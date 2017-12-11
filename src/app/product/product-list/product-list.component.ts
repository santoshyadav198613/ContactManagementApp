import { Component, OnInit } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'con-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  constructor() { }

  ngOnInit() {
  }

}
