import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiConstants } from '../constants/api.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../model/response.model';
import { ProductModel } from '../model/product.model';
import { RequestProductModel } from '../model/request/request-product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ResponseModel<ProductModel[]>> {
    return this.http.get<ResponseModel<ProductModel[]>>(this.apiUrl);
  }

  getProductById(id: number): Observable<ResponseModel<ProductModel>> {
    return this.http.get<ResponseModel<ProductModel>>(`${this.apiUrl}/${id}`);
  }

  createProduct(product: RequestProductModel): Observable<ResponseModel<ProductModel>> {
    return this.http.post<ResponseModel<ProductModel>>(this.apiUrl, product);
  }

  updateProduct(id: number, product: RequestProductModel): Observable<ResponseModel<ProductModel>> {
    return this.http.put<ResponseModel<ProductModel>>(`${this.apiUrl}/${id}`, product);
  }
}
