import { Component, OnInit } from '@angular/core';
import { GoogleBrowserService} from '../google-browser.service'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {

  data: any;

  constructor(private gbrowser: GoogleBrowserService) { 

    gbrowser.searchPerformed.subscribe(d => this.data = d);

  }

  ngOnInit() {
  }

}
