import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Qcm} from './qcm';

@Component({
  selector: 'app-qcm',
  templateUrl: './qcm.component.html',
  styleUrls: ['./qcm.component.css']
})
export class QcmComponent implements OnInit {
  qcms: Qcm[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.qcms = [
      new Qcm(0, 'qui est l\'actuel president du senegal ?', 'macky sall', 10),
      new Qcm(1, 'capitale du senegal ?', 'dakar', 10),
      new Qcm(2, 'quelle est la devise du senegal?', 'un peuple un but', 10),
      new Qcm(3, 'qui est l\'actuel president du senegal ?', 'macky sall', 10),
    ];
  }

  // tslint:disable-next-line:typedef
  openAdd() {
    this.router.navigate(['qcm/add']);
  }
}
