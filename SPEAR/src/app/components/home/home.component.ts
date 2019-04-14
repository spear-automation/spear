import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private readonly router: Router,) { }

  ngOnInit() {
  }
  
  public onAboutUs() {
    this.router.navigate(['about-us']);
  }

  public onProduct() {
    this.router.navigate(['product']);
  }

  public onRoadmap() {
    this.router.navigate(['roadmap']);
  }
}
