import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order/order.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { OrderItemCartComponent } from './order-item-cart/order-item-cart.component';


@NgModule({
  declarations: [
    OrderComponent,
    OrderItemComponent,
    ProductComponent,
    ProductDetailComponent,
    OrderItemCartComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule { }
