import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: any[] = [];
  // posts: any;
  constructor(private _http: HttpService, private _router: Router, 
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.posts = [{
      title: "",
      description: "",
      createdAt: ""
    }]

    // let obs = this._http.getAll()
    // obs.subscribe((data:any[])=>{this.posts = data});
    let obs = this._http.getAll()
  	obs.subscribe((data:any[])=>this.posts = data);
  	// console.log(this.posts);
  }
  getAll()
  {
    let obs = this._http.getAll()
    obs.subscribe((data:any[])=>this.posts = data);
  }

  // createNew(){
  //   console.log("post a new question")
  // }
 



  
}
