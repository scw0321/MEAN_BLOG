import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
//  General ID
  id = function (){
    let observable = this._route.paramMap;
    observable.subscribe(params=>this.getInfo(params.get('id')));
  }
//  Retrieved data saved in _post variable 
  _post: any = {
    title: "",
    description: "",
    answer: []
  };
// answer constructor for http patch 
  answer: any;
  errs : any;


  constructor(private _http: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  	let observable = this._route.paramMap;
    observable.subscribe(params=>this.getInfo(params.get('id')));

    this.answer = "";
  }

  getInfo(id){
    let obs = this._http.getOne(id);
    obs.subscribe((data: any[])=>this._post = data);
    console.log(['data']);  
  }

  addAnswer(){
    console.log("in the add answer function")
    let obs = this._http.addAnswer(this.id, this.answer)
    obs.subscribe(data => {
      // if('errors' in data){
      //   this.errs = [];
      //   for(let x in data['errors']){
      //     this.errs.push(data['errors'][x]['message'])
      //   }
      //   console.log("There were errors!", this.errs);
      // }else{
        this.answer = data;
      // }
    })
  }




}
