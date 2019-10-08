import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AdsComponent } from './ads/ads.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AdsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
