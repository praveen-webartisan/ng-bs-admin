import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';

import * as Config from 'src/app/config';
import * as helperJS from 'src/assets/js/app.js';

import { BasicService } from 'src/app/services/basic.service';
import { TopNavbarComponent } from 'src/app/components/widgets/top-navbar/top-navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isPageLoading: boolean = true;
  title = Config.appName;

  constructor(
    public router: Router,
    private basic: BasicService,
  ) {
    this.router.events.subscribe((rE) => {
      if(rE instanceof NavigationStart) {
        this.basic.setTitle(Config.appName);
        this.isPageLoading = true;
      } else if(rE instanceof NavigationEnd) {
        this.isPageLoading = false;
        helperJS.initBSComponents();
      }
    });

    this.basic.setTitle(this.title);
  }

}
