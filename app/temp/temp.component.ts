import { Component } from "@angular/core"

@Component({
    selector : 'temp',
    templateUrl : './app/temp/temp.template.html'
})
export class TempComponent{
    zalups:zalupka[] = [new zalupka("zalupa1"),new zalupka("zalupa2"),new zalupka("zalupa3")] 
}
class zalupka{
    name:string;
    constructor(inputname:string){
        this.name = inputname;
    }
}