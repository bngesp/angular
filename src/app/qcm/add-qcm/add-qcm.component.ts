import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-qcm',
  templateUrl: './add-qcm.component.html',
  styleUrls: ['./add-qcm.component.css']
})
export class AddQcmComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  retourToQcm() {
    this.router.navigate(['qcm']);
  }
}
