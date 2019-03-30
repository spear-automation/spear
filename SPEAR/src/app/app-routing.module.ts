import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about-us', component: AboutUsComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
