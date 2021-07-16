import { Injectable } from '@angular/core';
import {Qcm} from './qcm/qcm';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QcmService {
  qcms = [
    new Qcm(0, 'qui est l\'actuel president du senegal ?', 'macky sall', 10),
    new Qcm(1, 'capitale du senegal ?', 'dakar', 10),
    new Qcm(2, 'quelle est la devise du senegal?', 'un peuple un but', 10),
    new Qcm(3, 'qui est l\'actuel president du senegal ?', 'macky sall', 10),
  ];
  constructor(
    private httpClient: HttpClient
  ) { }

  // tslint:disable-next-line:typedef
  getQcmFromServer() {
    return this.httpClient.get('http://localhost:8090/donnees.php');
  }
  // tslint:disable-next-line:typedef
  ajout(id: number,
        question: string,
        reponse: string,
        note: number
  ){
    this.qcms.push(new Qcm(id, question, reponse, note));
  }
}
