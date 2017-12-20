import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { Breadcrumb, BreadcrumbService } from 'angular-crumbs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private IsLogin: boolean = false;

  constructor(public location: Location, private titleService: Title,
    private breadcrumbService: BreadcrumbService,
    private router: Router) { }

  ngOnInit() {
    this.breadcrumbService.breadcrumbChanged.subscribe((crumbs) => {
      this.titleService.setTitle(this.createTitle(crumbs));
    });

    this.router.events.subscribe(n => {
      if (!(n instanceof NavigationEnd)) {
        return;
      }

      var route = this.router.routerState.root.snapshot.firstChild;
      this.IsLogin = route.data.isLogin;

    });

  }
  private createTitle(routesCollection: Breadcrumb[]) {
    const title = 'Angular2 Breadcrumb';
    const titles = routesCollection.filter((route) => route.displayName);

    if (!titles.length) return title;

    const routeTitle = this.titlesToString(titles);
    return `${routeTitle} ${title}`;
  }

  private titlesToString(titles) {
    return titles.reduce((prev, curr) => {
      return `${curr.displayName} - ${prev}`;
    }, "");
  }
  isMaps(path) {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    if (path == titlee) {
      return false;
    }
    else {
      return true;
    }
  }
}
