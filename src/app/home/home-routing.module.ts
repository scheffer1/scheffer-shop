import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { ProductsComponent } from '../pages/products/products.component';
import { RegisterComponent } from '../pages/register/register.component';
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

      },
      {
        path:'register',
        component: RegisterComponent
      }
    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
