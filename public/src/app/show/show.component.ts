import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  _post: any = {
      title: "",
      description: "",
      answer: []
      
    };
  constructor(private _http: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  	let robs = this._route.paramMap;
  	robs.subscribe(params=>this.getInfo(params.get('id')));
  }

  getInfo(id)
  {
  	let obs = this._http.getOne(id);
  	obs.subscribe((data: any[])=>this._post = data);
  	console.log(['data']);
  }

}
