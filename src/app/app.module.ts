import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ThemeComponent } from './component/theme/theme.component';
import { HttpClientModule } from "@angular/common/http";
import { ByTypeComponent } from './component/by-type/by-type.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThemeComponent,
    ByTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
