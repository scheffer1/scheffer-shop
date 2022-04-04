import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home',
  },
  {
    path:'home',
    loadChildren:() => import('./home/home.module').then((m) => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule, 
    HomeModule
  ]
})
export class AppRoutingModule { }
