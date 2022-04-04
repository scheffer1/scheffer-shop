import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    ProductsComponent, 
    LoginComponent
  ],
  imports: [
    CommonModule, 
    MatSliderModule,
    MatCardModule

  ],
  exports:[
    ProductsComponent, 
    LoginComponent
  ]
})
export class PagesModule { }
