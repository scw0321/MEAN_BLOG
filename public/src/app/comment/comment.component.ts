import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  errors: any;
  _answer: any; 
  _comment: any;
  _post: any;
  constructor(private _http: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  	this._route.paramMap.subscribe(params=> this.getInfo(params.get('id')));
  	this._post = {
  		title: " ",
  		description: " ",
  		answers: [{}]
  	}
  	this._answer = {
  		answer: " ",
  		comments:[{}]
	  }
	this._comment ={
		comment: " "
	}  
  	this.errors = []
  }

   getInfo(id)
  {
  	this._http.getOne(id).subscribe((data: any[])=>this._post = data);
  }

  addAnswer()
  {
  	let obs = this._http.addAnswer(this._post._id, this._answer);
  	obs.subscribe(data=>{
  		if(data['errors'])
  			
  		{
  			console.log(data['errors'])
  			console.log(data['errors']['message'])
  			this.errors = []
  			for(let err in data['errors'])
  			{
  				this.errors.push(data['errors'][err]['message']);
  			}
  			// console.log(this.errors)
  		}else{
  			this._router.navigate(['/posts'])	
  		}
  	})
  }


}
