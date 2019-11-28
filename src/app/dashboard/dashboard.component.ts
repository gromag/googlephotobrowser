import { Component, OnInit, Inject } from '@angular/core';
import { GoogleBrowserService} from '../google-browser.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  accessToken: any = "";
  mediaDate: Date;


  constructor(
    private gbrowser: GoogleBrowserService) { 
  }

  search(){
    this.gbrowser.searchByDate(new Date(this.mediaDate), this.accessToken);
  }

  ngOnInit() {
  }
}
