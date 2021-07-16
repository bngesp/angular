import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Qcm} from './qcm';
import {QcmService} from '../qcm.service';

@Component({
  selector: 'app-qcm',
  templateUrl: './qcm.component.html',
  styleUrls: ['./qcm.component.css']
})
export class QcmComponent implements OnInit {
  qcms: Qcm[] = [];
  constructor(
    private router: Router,
    private qcmservice: QcmService
  ) { }

  ngOnInit(): void {
    this.qcms = this.qcmservice.qcms;
    this.qcmservice.getQcmFromServer().subscribe(
      (data) => console.log(data),
      (err) => console.error(err)
    );
  }

  // tslint:disable-next-line:typedef
  openAdd() {
    this.router.navigate(['qcm/add']);
  }
}
