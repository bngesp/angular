import { Component } from '@angular/core';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  isConnected = true;
  personne =  {
    // tslint:disable-next-line:indent
  	nom : 'NGOM',
    // tslint:disable-next-line:indent
  	prenom: 'Bassirou',
    // tslint:disable-next-line:indent
  	age: 90,
    // tslint:disable-next-line:indent
  	profession: 'Developper WeB'
  };
  // @ts-ignore
  note = [10, 12, 9, 17];

  // tslint:disable-next-line:typedef
  search = '';

  // tslint:disable-next-line:typedef
  changeConnection() {
    this.isConnected = true;
  }
  // tslint:disable-next-line:typedef
  changeDeconnection() {
    this.isConnected = false;
  }
}
