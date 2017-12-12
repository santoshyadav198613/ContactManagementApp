import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';

import { ProductListComponent } from '../product/product-list/product-list.component';

@Component({
  selector: 'con-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentInit {

  @ContentChild(ProductListComponent) productChild: ProductListComponent;

  constructor() { }

  ngOnInit() {
    console.log(this.productChild);
  }

  ngAfterContentInit(): void {
    console.log(this.productChild);
  }
}
