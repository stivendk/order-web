import { Component, Input, OnInit } from '@angular/core';
import { OrderItemService } from '../shared/services/order-item.service';
import { RequestOrderItemModel } from '../shared/model/request/request-order-item.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  @Input() productId: number = 0;
  @Input() maxQuantity: number = 0;
  orderId: number = 0;

  quantity: number = 1;

  orderItemForm: FormGroup;
  requestOrderItem: RequestOrderItemModel | undefined;

  constructor(
    private fb: FormBuilder,
    private orderItemService: OrderItemService
  ) {
    this.orderItemForm = this.fb.group({
      quantity: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.orderId = Number(localStorage.getItem('orderId')?.valueOf());
  }

  addToOrder(): void {
    this.requestOrderItem = {
      productId: this.productId,
      quantity: this.quantity,
      orderId: this.orderId
    };
    this.orderItemService.addOrderItem(this.requestOrderItem).subscribe(() => {
      console.log('Order item added successfully');
    });
  }
}
