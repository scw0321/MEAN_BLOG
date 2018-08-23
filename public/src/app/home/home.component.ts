import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '../../../node_modules/@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: any[] = [];
  constructor(private _http: HttpService, private _router:Router) { }

  ngOnInit() {
    this.posts = [{
      title: "",
      description: "",
    }]

    let observable = this._http.getAll();
    observable.subscribe((data: any[]) => {this.posts = data})
  }

  createNew(){
    console.log("creating a new post")
  }
 



  
}
