import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {
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
  }

  getInfo(id)
  {
  	let obs = this._http.getOne(id);
  	obs.subscribe((data: any[])=>this._post = data);
  	console.log(['data']);
  }

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
}
