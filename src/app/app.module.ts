import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TecnocomprasAboutComponent } from './tecnocompras-about/tecnocompras-about.component';
import { TecnocomprasProductsComponent } from './tecnocompras-products/tecnocompras-products.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component'
import { from } from 'rxjs';
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
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
