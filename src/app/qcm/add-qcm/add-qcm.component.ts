import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {QcmService} from '../../qcm.service';

@Component({
  selector: 'app-add-qcm',
  templateUrl: './add-qcm.component.html',
  styleUrls: ['./add-qcm.component.css']
})
export class AddQcmComponent implements OnInit {
  constructor(
    private router: Router,
    private qmcService: QcmService
  ) { }

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  retourToQcm() {
    this.router.navigate(['qcm']);
  }


  // tslint:disable-next-line:typedef
  addQcm(monFormulaire: NgForm) {
    console.log(monFormulaire.value);
    this.qmcService.ajout(
      monFormulaire.value.id,
      monFormulaire.value.question,
      monFormulaire.value.reponse,
      monFormulaire.value.note,
    );
  }
}
