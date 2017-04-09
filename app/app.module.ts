import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { ItemComponent } from './item/item.component';
import { TempComponent } from './temp/temp.component'
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent , ItemComponent, TempComponent ],
    bootstrap:    [ AppComponent , ItemComponent, TempComponent ]
})
export class AppModule { }