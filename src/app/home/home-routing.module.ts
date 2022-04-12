import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
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
      },
      {
        path:'login',
        component: LoginComponent

      }
      

    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
