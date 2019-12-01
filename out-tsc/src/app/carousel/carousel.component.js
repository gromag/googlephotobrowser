import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GoogleBrowserService } from '../google-browser.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(gbrowser, dashboard) {
        var _this = this;
        this.gbrowser = gbrowser;
        this.dashboard = dashboard;
        gbrowser.searchPerformed.subscribe(function (d) { return _this.data = d; });
    }
    CarouselComponent.prototype.goNextPage = function (token) {
        this.dashboard.search(token);
    };
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = tslib_1.__decorate([
        Component({
            selector: 'app-carousel',
            templateUrl: './carousel.component.html',
            styleUrls: ['./carousel.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [GoogleBrowserService,
            DashboardComponent])
    ], CarouselComponent);
    return CarouselComponent;
}());
export { CarouselComponent };
//# sourceMappingURL=carousel.component.js.map