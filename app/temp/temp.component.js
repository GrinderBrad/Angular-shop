"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TempComponent = (function () {
    function TempComponent() {
        this.hui = new Variables();
    }
    TempComponent.prototype.out = function () {
        this.hui.name += 'a';
        alert(this.hui.name);
    };
    return TempComponent;
}());
TempComponent = __decorate([
    core_1.Component({
        selector: 'temp',
        //templateUrl: './app/temp/temp.template.html'
        template: "<label>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F:</label>\n                 <input [(ngModel)]=\"name\" placeholder=\"name\">\n                 <h1>\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C {{name}}!</h1>\n                 <button (click) = \"out()\">\u043E\u043F\u0430</button>"
    })
], TempComponent);
exports.TempComponent = TempComponent;
var Variables = (function () {
    function Variables() {
        this.name = "hello";
    }
    return Variables;
}());
//# sourceMappingURL=temp.component.js.map