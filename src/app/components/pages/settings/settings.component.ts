import { Component, OnInit } from '@angular/core';

import { BasicService } from 'src/app/services/basic.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
    private basic: BasicService,
  ) {
    this.basic.setTitle('Settings');
  }

  ngOnInit(): void {
  }

}
