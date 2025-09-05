import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Store {
  private _http = inject(HttpClient);
  private _baseUrl = 'https://fakestoreapi.com';

  getCategories(): Observable<any[]> {
    return this._http.get<any[]>(`${this._baseUrl}/products/categories`);
  }
  getProducts(): Observable<any[]> {
    return this._http.get<any[]>(`${this._baseUrl}/products`);
  }
  getProductsByCategory(category: string): Observable<any[]> {
    return this._http.get<any[]>(`${this._baseUrl}/products/category/${category}`);
  }
  getProduct(id: number): Observable<any> {
    return this._http.get<any>(`${this._baseUrl}/products/${id}`);
  }
}