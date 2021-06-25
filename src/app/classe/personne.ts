export class Personne {
  // tslint:disable-next-line:variable-name
  private _nom: string;
  // tslint:disable-next-line:variable-name
  private _prenom: string;
  // tslint:disable-next-line:variable-name
  private _age: number;
  // tslint:disable-next-line:variable-name
  private _sexe: string;
  private _notes: number[];


  constructor(nom: string, prenom: string, age: number, sexe: string, notes: number[]) {
    this._nom = nom;
    this._prenom = prenom;
    this._age = age;
    this._notes = notes;
    this._sexe = sexe;
  }


  get sexe(): string {
    return this._sexe;
  }

  set sexe(value: string) {
    this._sexe = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get notes(): number[] {
    return this._notes;
  }

  set notes(value: number[]) {
    this._notes = value;
  }
}
