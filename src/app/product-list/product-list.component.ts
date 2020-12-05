import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  products : Product[] = [
    {
      name: 'asd',
      type: 'asd',
      price: 152,
      stock: 15,
      image:'../../assets/producto.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'asd',
      type: 'asd',
      price: 152,
      stock: 15,
      image:'../../assets/producto.jpg',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'asd',
      type: 'asd',
      price: 152,
      stock: 0,
      image:'../../assets/producto.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'asd',
      type: 'asd',
      price: 152,
      stock: 15,
      image:'../../assets/producto.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'asd',
      type: 'asd',
      price: 152,
      stock: 15,
      image:'../../assets/producto.jpg',
      clearance: false,
      quantity: 0,
    }
  ]
  ngOnInit(): void {
  }
  upQuantity(product: Product): void{
    if(product.quantity < product.stock)
      product.quantity++;
  }
  downQuantity(product: Product): void{
    if(product.quantity > 0)
      product.quantity--;
  }
  onChangeQuantity(event, product: Product): void{
    if(event.key == Number){
      if(event.key < product.stock){
        
      }
    }
  }
}
