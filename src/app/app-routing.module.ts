import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContantComponent } from './contant/contant.component';
import { PORTFOLIOComponent } from './portfolio/portfolio.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AngularComponent } from './angular/angular.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { HtmlComponent } from './html/html.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent, title:'Home'},
  {path:'about', component:AboutComponent, title:'About'},
  {path:'contact', component:ContantComponent, title:'Contact'},
  {path:'Portfolio', component:PORTFOLIOComponent, title:'Portfolio', children:[
    {path:'angular', component:AngularComponent},
    {path:'bootstrap', component:BootstrapComponent},
    {path:'html', component:HtmlComponent},
  ]},
  {path:"**", component:NotfoundComponent, title:'NotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
