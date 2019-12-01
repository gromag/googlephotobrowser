import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { GoogleBrowserService } from './google-browser.service';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { CookieService } from 'ngx-cookie-service';
var googleLoginOptions = {
    scope: 'https://www.googleapis.com/auth/photoslibrary.readonly'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig
var config = new AuthServiceConfig([
    {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("400603513178-t5nfu9n83au0a3fs7bstk98q60hmv2ql.apps.googleusercontent.com", googleLoginOptions)
    }
]);
export function provideConfig() {
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                CarouselComponent,
                DashboardComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                FormsModule,
                HttpClientModule,
                SocialLoginModule
            ],
            providers: [
                HttpClientModule,
                DashboardComponent,
                GoogleBrowserService,
                {
                    provide: AuthServiceConfig,
                    useFactory: provideConfig
                },
                CookieService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map