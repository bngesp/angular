import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-qcm',
  templateUrl: './qcm.component.html',
  styleUrls: ['./qcm.component.css']
})
export class QcmComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  openAdd() {
    this.router.navigate(['qcm/add']);
  }
}
