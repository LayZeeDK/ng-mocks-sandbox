import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, AppScam } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, AppScam],
})
export class AppModule {}
