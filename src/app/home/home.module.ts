import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home.component';
import { PagesModule } from '../pages/pages.module';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    PagesModule
  ],
  declarations: [
    HomeComponent
  ]
  
})
export class HomeModule { }
