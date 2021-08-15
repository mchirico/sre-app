import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HomeComponent } from './navpages/home/home.component';
import { MainComponent } from './navpages/main/main.component';
import { AuthComponent } from './navpages/auth/auth.component';
import { Page0Component } from './navpages/page0/page0.component';
import { AreaChartComponent } from './navpages/page0/area-chart/area-chart.component';
import { StartChartComponent } from './navpages/page0/area-chart/start-chart/start-chart.component';
import { DetailChartComponent } from './navpages/page0/area-chart/detail-chart/detail-chart.component';
import { Page1Component } from './navpages/page1/page1.component';
import { SearchComponent } from './navpages/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import { BasicComponent } from './websockets/basic/basic.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MainComponent,
    AuthComponent,
    Page0Component,
    AreaChartComponent,
    StartChartComponent,
    DetailChartComponent,
    Page1Component,
    SearchComponent,
    BasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
