import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from './Product';
import { ProductDataService } from '../product-data.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {



  products : Product[] = [];

  constructor(
    private cart: ProductCartService, 
    private productsDataService: ProductDataService
  ) { } 

  ngOnInit(): void {
    this.productsDataService.getAll()
      .subscribe( products => this.products = products);
  }

  addToCart(product): void{
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }

  maxReached(m: string){
    alert(m);
  }
}
