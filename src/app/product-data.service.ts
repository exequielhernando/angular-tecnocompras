import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { Product } from './product-list/Product';

const URL = 'https://5f87805549ccbb00161775ca.mockapi.io/api/v1/beers';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]> {

    return this.http.get<Product[]>(URL)
      .pipe( 
        tap( (products: Product[]) => products.forEach(product => product.quantity = 0) )
       
      );
  }
}
