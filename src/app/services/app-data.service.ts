import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor(private http:HttpClient) { 
  }

  getProducts(): Observable<Product>{ 
    return this.http.get<Product>('https://reqres.in/api/products');
  }

}
