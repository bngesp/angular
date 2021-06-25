import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  personne = {
    nom: 'diouf', prenom: 'bass', sexe: 'M', age: 10
  };
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  changerSexeToM() {
    this.personne.sexe = 'M';
    console.log(this.personne);
  }
  // tslint:disable-next-line:typedef
  changerSexeToF() {
    this.personne.sexe = 'F';
    console.log(this.personne);
  }

  // tslint:disable-next-line:typedef
  getColor(){
    if (this.personne.sexe === 'f') {
      return '{color: "red"}';
    }
    else {
      return  '{color: "green"}';
    }
  }
}
