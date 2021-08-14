import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './navpages/home/home.component';
import {MainComponent} from './navpages/main/main.component';
import {Page0Component} from './navpages/page0/page0.component';
import {Page1Component} from './navpages/page1/page1.component';



const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'main', component: MainComponent},
  {path: 'page0', component: Page0Component},
  {path: 'page1', component: Page1Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
