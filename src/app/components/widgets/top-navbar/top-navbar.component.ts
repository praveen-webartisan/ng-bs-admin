import { Component, OnInit } from '@angular/core';

import * as Config from 'src/app/config';

import { BasicService } from 'src/app/services/basic.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  appName = Config.appName;
  appLogo = Config.appLogo;

  constructor(
    private basic: BasicService,
  ) { }

  ngOnInit(): void {
  }

  logoutUser() {
    this.basic.redirect('dashboard', {message: 'You are logged out successfully.'});
  }

}
