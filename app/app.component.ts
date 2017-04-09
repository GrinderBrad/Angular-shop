import { Component } from '@angular/core';
     
export class Item{
    purchase: string;
    done: boolean;
    price: number;
     
    constructor(purchase: string, price: number) {
  
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}
 
@Component({
    selector: 'purchase-app',
    //templateUrl: `./templates/app.template.html`
    template : ''
})
export class AppComponent { 
}