import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiConstants } from '../constants/api.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../model/response.model';
import { OrderItemModel } from '../model/order-item.model';
import { RequestOrderItemModel } from '../model/request/request-order-item.model';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {
  private apiUrl = `${environment.apiUrl}/order-items`;

  constructor(private http: HttpClient) { }

  getOrderItems(): Observable<ResponseModel<OrderItemModel>> {
    return this.http.get<ResponseModel<OrderItemModel>>(this.apiUrl);
  }

  getOrderItemById(id: number): Observable<ResponseModel<OrderItemModel>> {
    return this.http.get<ResponseModel<OrderItemModel>>(`${this.apiUrl}/${id}`);
  }

  addOrderItem(request: RequestOrderItemModel): Observable<ResponseModel<OrderItemModel>> {
    return this.http.post<ResponseModel<OrderItemModel>>(`${this.apiUrl}/add`, request);
  }

  updateOrderItem(id: number, request: RequestOrderItemModel): Observable<ResponseModel<OrderItemModel>> {
    return this.http.put<ResponseModel<OrderItemModel>>(`${this.apiUrl}/${id}`, request);
  }
  
  deleteOrderItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
