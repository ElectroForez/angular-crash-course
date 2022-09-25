import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from "../models/product";

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(value: IProduct[], search: string): IProduct[] {
    if (!search.length) return value;

    return value.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
  }

}
