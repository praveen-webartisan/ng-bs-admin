import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationExtras } from '@angular/router';

import * as Config from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  constructor(
    private titleService: Title,
    private router: Router,
  ) { }

  setTitle(title: string = '') {
    if(title) {
      if(title.toLowerCase() == Config.appName.toLowerCase()) {
        title = '';
      } else {
        title += ' | ';
      }
    }

    title += Config.appName;

    this.titleService.setTitle(title);
  }

  redirect(url: string, data: any = {}) {
    let navigateData: NavigationExtras = {
      state: data,
    };

    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.router.onSameUrlNavigation = 'reload';

    this.router.navigate([url], navigateData);
  }

  getRouterData() {
    let data: any = this.router.getCurrentNavigation()?.extras;
    return data?.state ?? false;
  }

}
