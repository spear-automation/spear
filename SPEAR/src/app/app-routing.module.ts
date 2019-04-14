import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { Routes, RouterModule } from '@angular/router';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { ProductComponent } from './components/product/product.component';
import { NgModule } from '@angular/core';
const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about-us', component: AboutUsComponent },
    { path: 'roadmap', component: RoadmapComponent},
    { path: 'product', component: ProductComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
