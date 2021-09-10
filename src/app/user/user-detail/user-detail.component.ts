import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __asyncDelegator } from 'tslib';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe(param=>{alert(param["id"])})
  }

}
