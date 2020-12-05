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
  maxReached(m: string){
    alert(m);
  }
}
