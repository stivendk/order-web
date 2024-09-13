import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/services/order.service';
import { OrderItemModel } from '../shared/model/order-item.model';
import { RequestUpdateOrder } from '../shared/model/request/request-update-order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orderItems: OrderItemModel[] | undefined = [];
  totalAmount: number | undefined = 0;
  isModalOpen: boolean = false;
  itemCount: number | undefined = 0;
  orderId: number = 0;

  constructor(
    private orderService: OrderService,
  ) {}

  ngOnInit(): void {
    this.loadOrderItems();
  }

  loadOrderItems(): void {
    this.orderService.getActiveOrder().subscribe(response => {
      if(response){
        this.orderId = response.data?.id ?? 0;
        localStorage.setItem('orderId', this.orderId.toString());
        this.orderItems = response.data?.items;
        this.itemCount = this.orderItems?.length;
        this.calculateTotal();
      }
    });
  }

  calculateTotal(): void {
    this.totalAmount = this.orderItems?.reduce((sum, item) => sum + (item.quantity * item.product.price), 0);
  }

  paidOrder(): void {
    const request: RequestUpdateOrder = {
      isPendingPaymentUpdate: false
    }
    this.orderService.updateOrder(this.orderId, request).subscribe(() => {
      console.log('Order placed successfully');
      this.handleItemUpdated();
      this.closeModal();
    })
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  handleItemUpdated(): void {
    this.loadOrderItems();
  }
}
