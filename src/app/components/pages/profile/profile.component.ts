import { Component, OnInit } from '@angular/core';

import { BasicService } from 'src/app/services/basic.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  pageTitle: string = 'Profile';

  constructor(
    private basic: BasicService,
  ) {
    this.basic.setTitle(this.pageTitle);
  }

  ngOnInit(): void {
  }

}
