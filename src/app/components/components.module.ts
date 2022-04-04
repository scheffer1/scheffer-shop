import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [
    FooterComponent, NavbarComponent
  ],
  exports: [
    FooterComponent, 
    NavbarComponent
  ]

})
export class ComponentsModule { }
