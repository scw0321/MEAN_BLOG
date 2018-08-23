import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  _post: any;
  errors: any;
  constructor(private _http: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  	this._route.paramMap.subscribe(params=> this.getInfo(params.get('id')));
  	this.errors = [];
  	this._post = {
  		title: " ",
  		description: " "
  	}
  }

  getInfo(id)
  {
  	this._http.getOne(id).subscribe((data: any[])=>this._post = data);
  	console.log(['data']);
  }

  update()
  {
  	this._http.update(this._post._id, this._post).subscribe(data=>{
  		if('errors' in data)
  		{
  			this.errors = [];
  			for(let err in data['errors'])
  			{
  				this.errors.push(data['errors'][err]['message']);
  			}
  			console.log(this.errors);
  		}else{
  			this._router.navigate(['/posts']);
  		}
  	})
  }

}
