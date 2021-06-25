import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Personne} from '../classe/personne';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  personnes = [
    new Personne('Ndiaye', 'Modou', 17, 'M', [9, 14, 15, 8]),
    new Personne('Diop', 'Anta', 18, 'F', [19, 10, 1, 8]),
    new Personne('Dieng', 'Fallou', 20, 'M', [19, 10, 1, 8]),
    new Personne('Samb', 'Ousmane', 8, 'M', [19, 10, 1, 8]),
    new Personne('Fall', 'Coumba', 28, 'F', [19, 10, 1, 8]),
  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.personnes);
  }

  changerSexe(sex: string){
    let person: Personne[] = [] ;
    this.personnes.forEach(p => {
      p.sexe = sex;
      person.push(p);
    } );
    this.personnes = person;
  }
}
