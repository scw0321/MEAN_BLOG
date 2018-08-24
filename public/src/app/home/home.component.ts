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

    this._http.getAll().subscribe((data:any[])=>this.posts = data);
  
  }
  getAll()
  {
    this._http.getAll().subscribe((data:any[])=>this.posts = data);
  }
  
 



  
}
