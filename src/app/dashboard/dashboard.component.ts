import { Component, OnInit, Inject } from '@angular/core';
import { GoogleBrowserService} from '../google-browser.service';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { CookieService } from 'ngx-cookie-service';
import { CarouselComponent } from '../carousel/carousel.component';
import { UIEventDispatcherService } from '../uievent-dispatcher.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  mediaDate: string;
  pageSize: string = "10";
  mediaDateCookieName: string = 'search-media-date';
  pageSizeCookieName: string = 'search-page-size';
  status: number; 
  statuses : any;

  private user: SocialUser;
  private loggedIn: boolean;


  constructor(
    private gbrowser: GoogleBrowserService,
    private authService: AuthService,
    private cookieService: CookieService,
    private uiEventDispatcher: UIEventDispatcherService) { 

      gbrowser.searchPerformed.subscribe(d => uiEventDispatcher.pageReady());
      uiEventDispatcher.nextPageTokenChanged.subscribe(t => this.search(t));
      uiEventDispatcher.pageStateChanged.subscribe(s => this.status = s);
      this.status = uiEventDispatcher.statuses.READY;
      this.statuses = uiEventDispatcher.statuses;
 
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  search(nextPageToken: string){
    this.uiEventDispatcher.pageLoading();
    this.cookieService.set( this.mediaDateCookieName, this.mediaDate);
    this.cookieService.set( this.pageSizeCookieName, this.pageSize);
    this.gbrowser.searchByDate(new Date(this.mediaDate), parseInt(this.pageSize), this.user.authToken, nextPageToken);
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  
    let today = new Date();
    this.mediaDate = this.cookieService.get(this.mediaDateCookieName) || today.toISOString().split('T')[0];
    this.pageSize = this.cookieService.get(this.pageSizeCookieName) || "10";
  }
}
