import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BasicService } from 'src/app/services/basic.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  rDataSubscribe: any = null;
  errorCode = 500;
  errorMessage = 'Oops! Something went wrong.';

  constructor(
    private activeRoute: ActivatedRoute,
    private basic: BasicService,
  ) {
    this.rDataSubscribe = this.activeRoute.data.subscribe((rData: any) => {
      this.errorCode = rData?.errorCode ?? 500;
    });

    this.basic.setTitle(String(this.errorCode));
  }

  ngOnInit(): void {
    if(this.errorCode == 404) {
      this.errorMessage = 'Page not found.';
    } else if(this.errorCode == 401) {
      this.errorMessage = 'You are not authorized to access this page.';
    } else if(String(this.errorCode).charAt(0) == '4') {
      this.errorMessage = 'The page/service does not exists.';
    } else if(String(this.errorCode).charAt(0) == '5') {
      this.errorMessage = 'Oops! Something went wrong.';
    }
  }

  ngOnDestroy() {
    this.rDataSubscribe?.unsubscribe();
  }

}
