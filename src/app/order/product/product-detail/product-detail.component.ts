import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../shared/model/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: ProductModel | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    this.productService.getProductById(productId).subscribe(product => {
      if(product.data){
        this.product = product.data;
      }
    });
  }
}
