import { Component } from '@angular/core';

@Component({
    selector : 'item',
    templateUrl: './app/Item/Item.template.html'
})
export class ItemComponent{
    shoes :Item[] = [
        new Item("hop hei lalalei","opa opa", 5, 500),
        new Item("hop hei lalalei2","opa opa2", 52, 502),
        new Item("hop hei lalalei3","opa opa3", 53, 503)
        ]
}
class Item{
    private name : string = "hui";
    private description: string = "pizda";
    private rating: number = 606;
    private price: number = 999;

    constructor(name:string, description:string, rating:number, price:number){
        this.name = name;
        this.description = description;
        this.rating = rating;
        this.price = price;
}}
