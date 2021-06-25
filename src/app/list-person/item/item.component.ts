import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import {Personne} from '../../classe/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne?: Personne;

  // personne = {
  //   nom: 'diouf',
  //   prenom: 'bass',
  //   sexe: 'M',
  //   age: 19,
  //   notes: [10, 14, 9, 19]
  // };
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  changerSexeToM() {
    // @ts-ignore
    this.personne?.sexe = 'M';
    console.log(this.personne);
  }
  // tslint:disable-next-line:typedef
  changerSexeToF() {
    // @ts-ignore
    this.personne?.sexe = 'F';
    console.log(this.personne);
  }

  // tslint:disable-next-line:typedef
  getColor(){
    if (this.personne?.sexe === 'f') {
      return '{color: "red"}';
    }
    else {
      return  '{color: "green"}';
    }
  }
}
