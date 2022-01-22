import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product} from './product';
import { Observable } from 'rxjs';
import { Category } from '../site-framework/category';

let headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET,POST,DELETE,PUT',
});
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product>{
    const productUrl = 'http://localhost:8080/inventory';

    return this.httpClient.get<Product>(productUrl); // return an observable
  }

  // getCategories(): Observable<Category>{
  //   const categoriesUrl = 'http://localhost:8080/categories';
  //   return this.httpClient.get<Category>(categoriesUrl);
  // }

  createProduct(productBody:any): Observable<Product>{
    const productUrl = 'http://localhost:8080/inventory/add';

    return this.httpClient.post<Product>(productUrl, productBody); // return an observable
  }

  viewProduct(productId:any): Observable<Product>{
    const productUrl = 'http://localhost:8080/inventory/'+ productId;
    return this.httpClient.get<Product>(productUrl); // return an observable
  }

  updateProduct(productId:any, productBody:any): Observable<Product>{
    const productUrl = 'http://localhost:8080/inventory/update/' + productId;
    return this.httpClient.put<Product>(productUrl, productBody); // return an observable
  }

  deleteProduct(productId:any): Observable<Product>{
    const productUrl = 'http://localhost:8080/inventory/delete/' + productId;
    return this.httpClient.delete<Product>(productUrl); // return an observable
  }



}
