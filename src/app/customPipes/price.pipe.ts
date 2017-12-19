import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../service/product/product';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(productList: Product[], amount: number): any {
    if (productList !== undefined) {
      return productList.filter((product) => product.price > amount);
    }
    return productList;

  }

}
