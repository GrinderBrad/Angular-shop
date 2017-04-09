"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ItemComponent = (function () {
    function ItemComponent() {
        this.shoes = [
            new Item("hop hei lalalei", "opa opa", 5, 500),
            new Item("hop hei lalalei2", "opa opa2", 52, 502),
            new Item("hop hei lalalei3", "opa opa3", 53, 503)
        ];
    }
    return ItemComponent;
}());
ItemComponent = __decorate([
    core_1.Component({
        selector: 'item',
        templateUrl: './app/Item/Item.template.html'
    })
], ItemComponent);
exports.ItemComponent = ItemComponent;
var Item = (function () {
    function Item(name, description, rating, price) {
        this.name = "hui";
        this.description = "pizda";
        this.rating = 606;
        this.price = 999;
        this.name = name;
        this.description = description;
        this.rating = rating;
        this.price = price;
    }
    return Item;
}());
//# sourceMappingURL=item.component.js.map