import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';

import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-twiter-search',
  templateUrl: './twiter-search.component.html',
  styleUrls: ['./twiter-search.component.scss']
})
export class TwiterSearchComponent implements OnInit {
  allUsers: any;
  statusKey = '';
  currCount = 30;
  queryKey = '';

  constructor(
    private apiCall: ApiCallService,
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(query => {
      this.queryKey = query.get('key');
      this.serchStatus('?key=' + (this.queryKey ? this.queryKey : 'adobe'));
    });
    setInterval(() => {
      if (this.currCount > 0) {
        this.currCount -= 1;
      } else {
        this.currCount = 30;
        window.scrollTo(0, 0);
        let refreshUrlKey =
          '' +
          this.allUsers.search_metadata.refresh_url.replace('&q=', '&key=');
        this.serchStatus(refreshUrlKey);
      }
    }, 1000);
  }

  serchStatus(key) {
    this.spinner.show();
    this.apiCall.getUsers(key).subscribe(data => {
      this.allUsers = data;
      this.spinner.hide();
      this.currCount = 30;
    });
  }

  onClickSerchButton() {
    if (this.statusKey) {
      this.serchStatus('?key=' + this.statusKey);
    } else {
      alert('please enter a search key');
    }
  }

  onScroll() {
    let nextUrlKey = this.allUsers.search_metadata.next_results.replace(
      '&q=',
      '&key='
    );

    this.apiCall.getUsers(nextUrlKey).subscribe((data: any) => {
      this.allUsers.statuses = [...this.allUsers.statuses, ...data.statuses];
      this.allUsers.search_metadata = data.search_metadata;
      this.currCount = 30;
    });
  }
}
