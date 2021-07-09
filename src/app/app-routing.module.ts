import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {NosServicesComponent} from './nos-services/nos-services.component';
import {APproposComponent} from './a-ppropos/a-ppropos.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ListPersonComponent} from './list-person/list-person.component';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'nos-services', component: NosServicesComponent},
  {path: 'a-propos', component: APproposComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'personnes', component: ListPersonComponent},
  {path: '**', redirectTo: 'accueil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
