import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ListPersonComponent } from './list-person/list-person.component';
import { ItemComponent } from './list-person/item/item.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NosServicesComponent } from './nos-services/nos-services.component';
import { APproposComponent } from './a-ppropos/a-ppropos.component';
import { ContactsComponent } from './contacts/contacts.component';
import { QcmComponent } from './qcm/qcm.component';
import { EditQcmComponent } from './qcm/edit-qcm/edit-qcm.component';
import { AddQcmComponent } from './qcm/add-qcm/add-qcm.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonComponent,
    ItemComponent,
    AccueilComponent,
    NosServicesComponent,
    APproposComponent,
    ContactsComponent,
    QcmComponent,
    EditQcmComponent,
    AddQcmComponent
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
