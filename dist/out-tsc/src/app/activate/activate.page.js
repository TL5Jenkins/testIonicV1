var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Sim } from '@ionic-native/sim/ngx';
import { Platform } from '@ionic/angular';
var ActivatePage = /** @class */ (function () {
    function ActivatePage(sim, platform) {
        this.sim = sim;
        this.platform = platform;
    }
    ActivatePage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('getSimData: called');
        this.platform.ready().then(function () {
            _this.sim.getSimInfo().then(function (info) {
                console.log('Sim info: ', info);
                console.log(info);
                _this.simInfo = info;
            }, function (err) { return console.log('Unable to get sim info: ', err); });
            _this.sim.hasReadPermission().then(function (info) { return console.log('Has permission: ', info); });
            _this.sim.requestReadPermission().then(function () { return console.log('Permission granted'); }, function () { return console.log('Permission denied'); });
        });
    };
    ActivatePage = __decorate([
        Component({
            selector: 'app-activate',
            templateUrl: './activate.page.html',
            styleUrls: ['./activate.page.scss'],
        }),
        __metadata("design:paramtypes", [Sim, Platform])
    ], ActivatePage);
    return ActivatePage;
}());
export { ActivatePage };
//# sourceMappingURL=activate.page.js.map