import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  constructor(public productsService: ProductsService,
              public modalService: ModalService) {
  }
  title = 'angular app';
  loading = false;
  term = '';


  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    });

  }


}
