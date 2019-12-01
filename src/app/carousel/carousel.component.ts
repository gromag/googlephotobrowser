import { Component, OnInit, EventEmitter, inject, Injectable } from '@angular/core';
import { GoogleBrowserService} from '../google-browser.service'
import { UIEventDispatcherService } from '../uievent-dispatcher.service';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  data: any;
  status: number;
  statuses: any;
  previousPageToken: Array<string> = new Array<string>();

  constructor(
    private gbrowser: GoogleBrowserService,
    private uiEventDispatcher: UIEventDispatcherService) { 

    gbrowser.searchPerformed.subscribe(d => this.data = d);
    uiEventDispatcher.pageStateChanged.subscribe(s => this.status = s);
    this.statuses = uiEventDispatcher.statuses;

  }

  goPreviousPageToken(){
    this.previousPageToken.pop();
    let token = this.previousPageToken.pop();
    this.uiEventDispatcher.nextPageTokenChanged.emit(token); 
  }
  goNextPage(token: string): void {
    this.previousPageToken.push(token);
    this.uiEventDispatcher.nextPageTokenChanged.emit(token);   
  }

  ngOnInit() {
  }

}
