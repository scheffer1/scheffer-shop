import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../pages/products/products.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'',
        component:ProductsComponent
      }
      

    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
