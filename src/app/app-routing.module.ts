import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TecnocomprasAboutComponent } from './tecnocompras-about/tecnocompras-about.component';
import { TecnocomprasProductsComponent } from './tecnocompras-products/tecnocompras-products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: TecnocomprasProductsComponent
  },
  {
    path: 'about',
    component: TecnocomprasAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
