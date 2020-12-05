import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { TecnocomprasAboutComponent } from './tecnocompras-about/tecnocompras-about.component';
import { TecnocomprasProductsComponent } from './tecnocompras-products/tecnocompras-products.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TecnocomprasAboutComponent,
    TecnocomprasProductsComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
