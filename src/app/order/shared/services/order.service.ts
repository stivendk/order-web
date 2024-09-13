import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiConstants } from '../constants/api.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../model/response.model';
import { OrderModel } from '../model/order.model';
import { RequestOrderModel } from '../model/request/request-order.model';
import { RequestUpdateOrder } from '../model/request/request-update-order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = `${environment.apiUrl}/orders`;

  constructor(private http: HttpClient) { }

  getOrders(): Observable<ResponseModel<OrderModel>>{
    return this.http.get<ResponseModel<OrderModel>>(this.apiUrl);
  }

  getActiveOrder(): Observable<ResponseModel<OrderModel>>{
    return this.http.get<ResponseModel<OrderModel>>(`${this.apiUrl}/active`);
  }

  getOrderById(id: number): Observable<ResponseModel<OrderModel>> {
    return this.http.get<ResponseModel<OrderModel>>(`${this.apiUrl}/${id}`);
  }

  createOrder(order: RequestOrderModel): Observable<ResponseModel<OrderModel>> {
    return this.http.post<ResponseModel<OrderModel>>(this.apiUrl, order);
  }

  updateOrder(id: number, request: RequestUpdateOrder): Observable<ResponseModel<OrderModel>> {
    return this.http.put<ResponseModel<OrderModel>>(`${this.apiUrl}/${id}`, request);
  }
  
}
