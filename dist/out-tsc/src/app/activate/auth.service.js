var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
var AuthService = /** @class */ (function () {
    function AuthService(router, storage) {
        this.router = router;
        this.storage = storage;
    }
    AuthService.prototype.activate = function () {
        // TODO call a service to verify activation code, create token and save to storage
        this.storage.set('ePodDriverToken', 'dumnyToken');
        // TODO navigate to list page after activating
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.storage.get('ePodDriverToken').then(function (val) {
            console.log('return true: ' + val);
            if (val === null) {
                return false;
            }
            else {
                return true;
            }
        });
    };
    AuthService.prototype.handleError = function (error) {
    };
    AuthService.prototype.quit = function () {
        // TODO update
    };
    AuthService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Router, Storage])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map