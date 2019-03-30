import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SPEAR';
  logo = 'favicon.ico';

  constructor(
    private readonly router: Router,
  ){

  }

  public onLogoClick() {
    this.router.navigate(['']);
  }
  public onHome() {
    this.router.navigate(['']);
  }
  public onAboutUs() {
    this.router.navigate(['about-us']);
  }
}
