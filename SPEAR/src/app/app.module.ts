import { BrowserModule  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    AppRoutingModule,

    // Angular Modules
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    // Angular Material Modules
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
