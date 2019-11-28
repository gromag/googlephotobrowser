import { Component, OnInit, Inject } from '@angular/core';
import { GoogleBrowserService} from '../google-browser.service';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mediaDate: string;
  pageSize: string = "10";
  mediaDateCookieName: string = 'search-media-date';

  private user: SocialUser;
  private loggedIn: boolean;


  constructor(
    private gbrowser: GoogleBrowserService,
    private authService: AuthService,
    private cookieService: CookieService) { 
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  search(){
    this.cookieService.set( this.mediaDateCookieName, this.mediaDate);
    this.gbrowser.searchByDate(new Date(this.mediaDate), parseInt(this.pageSize), this.user.authToken);
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  
    this.mediaDate = this.cookieService.get(this.mediaDateCookieName);
  }
}
