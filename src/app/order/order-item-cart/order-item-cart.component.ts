import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderItemModel } from '../shared/model/order-item.model';
import { OrderItemService } from '../shared/services/order-item.service';
import { RequestOrderItemModel } from '../shared/model/request/request-order-item.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-item-cart',
  templateUrl: './order-item-cart.component.html',
  styleUrls: ['./order-item-cart.component.scss']
})
export class OrderItemCartComponent implements OnInit {

  @Input() itemId = 0;
  @Output() itemUpdated: EventEmitter<void> = new EventEmitter<void>();

  item: OrderItemModel = new OrderItemModel;

  itemUpdateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private orderItemService: OrderItemService
  ) {
    this.itemUpdateForm = this.fb.group({
      quantity: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getOrderItem();
  }

  getOrderItem(): void {
    this.orderItemService.getOrderItemById(this.itemId).subscribe((response) =>{
      if(response.data){
        this.item = response.data;
        this.itemUpdateForm.get('quantity')?.setValue(this.item.quantity);
      }
    });
  }

  updateItem(): void {
    const request: RequestOrderItemModel = {
      productId: this.item?.product.id,
      quantity: this.itemUpdateForm.get('quantity')?.value
    }

    this.orderItemService.updateOrderItem(this.itemId, request).subscribe(() => {
      this.itemUpdated.emit();
    });
  }

  removeItem(orderId: number): void {
    this.orderItemService.deleteOrderItem(orderId).subscribe({
      next: () => {
        this.itemUpdated.emit();
        console.log('Item removed successfully');
      }
    });
  }
}
