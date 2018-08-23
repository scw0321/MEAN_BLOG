import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  post: any;
  id: String;
  errs: any;
  data: any;

  constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params.id;
    });

    // this.post={
    //   email: "",
    //   name: "",
    //   title: "",
    //   description:"",
    //   comments:[],
    // }

    this._http.getOne(this.id).subscribe(data => {
      console.log(data)
      this.post = data;
    })
  }







}
