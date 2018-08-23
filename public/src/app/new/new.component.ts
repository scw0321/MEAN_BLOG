import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  errors: any;
  _post: any;
  constructor(private _http: HttpService, private _router: Router) { }

  ngOnInit() {
  	this._post = {
  		title: " ",
  		description: " "
  	}
  	this.errors = [];
  }

  create()
  {
  	this._http.create(this._post).subscribe(data=>{
  		if('errors' in data)
  		{
  			this.errors = [];
  			for(let err in data['errors'])
  			{
  				this.errors.push(data['errors'][err]['message'])
  			}
  			console.log(this.errors);
  		}else{
  			this._router.navigate(['/posts'])
  		}
  	})
  	console.log("Add Question")
  }

}
