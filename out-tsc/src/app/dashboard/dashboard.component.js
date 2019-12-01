import * as tslib_1 from "tslib";
import { Component, Injectable } from '@angular/core';
import { GoogleBrowserService } from '../google-browser.service';
import { AuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { CookieService } from 'ngx-cookie-service';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(gbrowser, authService, cookieService) {
        var _this = this;
        this.gbrowser = gbrowser;
        this.authService = authService;
        this.cookieService = cookieService;
        this.statuses = { LOADING: 1, READY: 0 };
        this.pageSize = "10";
        this.mediaDateCookieName = 'search-media-date';
        this.status = this.statuses.READY;
        gbrowser.searchPerformed.subscribe(function (d) { return _this.setLoadingStatus(_this.statuses.READY); });
    }
    DashboardComponent.prototype.setLoadingStatus = function (status) {
        this.status = status;
    };
    DashboardComponent.prototype.signInWithGoogle = function () {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    };
    DashboardComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    DashboardComponent.prototype.search = function (nextPageToken) {
        this.setLoadingStatus(this.statuses.LOADING);
        this.cookieService.set(this.mediaDateCookieName, this.mediaDate);
        this.gbrowser.searchByDate(new Date(this.mediaDate), parseInt(this.pageSize), this.user.authToken, nextPageToken);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
            _this.loggedIn = (user != null);
        });
        this.mediaDate = this.cookieService.get(this.mediaDateCookieName);
    };
    DashboardComponent = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [GoogleBrowserService,
            AuthService,
            CookieService])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map