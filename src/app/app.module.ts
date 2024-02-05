import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContantComponent } from './contant/contant.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PORTFOLIOComponent } from './portfolio/portfolio.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { AngularComponent } from './angular/angular.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { HtmlComponent } from './html/html.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContantComponent,
    NavbarComponent,
    FooterComponent,
    PORTFOLIOComponent,
    NotfoundComponent,
    AngularComponent,
    BootstrapComponent,
    HtmlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
