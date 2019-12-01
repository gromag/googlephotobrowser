import * as tslib_1 from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var GoogleBrowserService = /** @class */ (function () {
    function GoogleBrowserService(http) {
        this.http = http;
        this.searchUrl = "https://photoslibrary.googleapis.com/v1/mediaItems:search";
        this.searchPerformed = new EventEmitter();
    }
    GoogleBrowserService.prototype.searchByDate = function (mediaDate, pageSize, accessToken, nextPageToken) {
        var _this = this;
        var headers = new HttpHeaders();
        headers = headers.append('Authorization', 'Bearer ' + accessToken);
        headers = headers.append('Content-Type', 'application/json');
        var body = {
            "pageSize": pageSize,
            "filters": {
                "dateFilter": {
                    "dates": [
                        {
                            "month": mediaDate.getUTCMonth() + 1,
                            "day": mediaDate.getUTCDate(),
                            "year": mediaDate.getUTCFullYear()
                        }
                    ]
                }
            },
            "pageToken": (nextPageToken || "")
        };
        this.http
            .post(this.searchUrl, body, { headers: headers })
            .subscribe(function (data) { console.log(data); _this.searchPerformed.emit(data); }, function (error) { console.log(error); });
    };
    GoogleBrowserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], GoogleBrowserService);
    return GoogleBrowserService;
}());
export { GoogleBrowserService };
//# sourceMappingURL=google-browser.service.js.map