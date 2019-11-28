import { Component, OnInit, Inject } from '@angular/core';
import { GoogleBrowserService} from '../google-browser.service';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  accessToken: any = "";
  mediaDate: Date;

  private user: SocialUser;
  private loggedIn: boolean;


  constructor(
    private gbrowser: GoogleBrowserService,
    private authService: AuthService) { 
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  search(){
    this.gbrowser.searchByDate(new Date(this.mediaDate), this.user.authToken);
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
}
