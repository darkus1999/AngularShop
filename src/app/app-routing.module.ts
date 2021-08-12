import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'detalle/:id', component: PagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
