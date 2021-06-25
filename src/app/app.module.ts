import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ListPersonComponent } from './list-person/list-person.component';
import { ItemComponent } from './list-person/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonComponent,
    ItemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
