import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {
<<<<<<< HEAD
  errors: any;
  _answer: any;
  _post: any;

  
  constructor(private _http: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  	
    this._route.paramMap.subscribe(params=> this.getInfo(params.get('id')));
  	this._post = {
  		title: " ",
      topic: " ",
      description: " ",
  		answers: [{}]
  	}
  	this._answer = {
  		answer: " "
  		  	}
  	this.errors = []
=======
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
>>>>>>> 3359ff22338ab8134d8ad16bad70dc225a3412fc
  }

  getInfo(id){
    let obs = this._http.getOne(id);
    obs.subscribe((data: any[])=>this._post = data);
    console.log(['data']);  
  }

<<<<<<< HEAD
  addAnswer()
  {
  	this._http.addAnswer(this._post._id, this._answer).subscribe(data=>{
  		if(data['errors'])  			
  		{  			
  			this.errors = []
  			for(let x in data['errors'])
  			{
  				this.errors.push(data['errors'][x]['message']);
  			}
  		
  		}else{
				// this._router.navigate(['/posts/, _post._id'])	
				this._router.navigate(['/posts'])	
  		}
  	})
  }
=======
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




>>>>>>> 3359ff22338ab8134d8ad16bad70dc225a3412fc
}
