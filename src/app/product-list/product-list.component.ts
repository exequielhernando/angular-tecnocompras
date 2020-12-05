import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  product : Product = {
    name: 'asd',
    type: 'asd',
    price: 152,
    stock: 15,
    image:'',
  }

  ngOnInit(): void {
  }

}
