import { Component } from '@angular/core';

@Component({
    selector : 'temp',
    //templateUrl: './app/temp/temp.template.html'
    template: `<label>Введите имя:</label>
                 <input [(ngModel)]="name" placeholder="name">
                 <h1>Добро пожаловать {{name}}!</h1>
                 <button (click) = "out()">опа</button>`
})
export class TempComponent{
    hui = new Variables();
     out():void{
         this.hui.name += 'a';
         alert(this.hui.name);
     }
}
class Variables{
    name : string = "hello";
}