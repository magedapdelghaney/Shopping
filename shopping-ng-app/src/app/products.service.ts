import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Product {
  ProductId: number;
  ProductName: string;
  ProductPrice: number;
  AvailablePieces: number;
  ProductImg: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  
  constructor(private httpClient: HttpClient) {}


  getProducts()
  {
   return this.httpClient.get<Product[]>('assets/data/products.json');
  }

  addOrder()
  {
    // to be implemented
  }

}
