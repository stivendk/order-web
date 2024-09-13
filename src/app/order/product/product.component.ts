import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared/services/product.service';
import { ProductModel } from '../shared/model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: undefined | ProductModel[] = [];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts(){
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data
    });
  }

  goToProductDetail(productId: number) {
    this.router.navigate([`/${productId}`]);
  }
}
