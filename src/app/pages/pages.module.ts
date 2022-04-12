import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';





@NgModule({
  declarations: [
    ProductsComponent, 
    LoginComponent, RegisterComponent,
  ],
  imports: [
    CommonModule, 
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ProductsComponent, 
    LoginComponent
  ]
})
export class PagesModule { }
