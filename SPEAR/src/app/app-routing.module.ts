import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { NgModule } from '@angular/core';
const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about-us', component: AboutUsComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'product', component: ProductComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }