import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';



var urlLookup = {
  '/algorithms' : 'algorithms',
  '/Python': 'python',
  '/Mean' : 'mean',
  '/Java' : 'java',
  '/HTML' : 'html/css',
  '/GitHub':'github',
  '/CSharp':'c#'
}

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

    this._http.getAll().subscribe((data:any[])=> {
      var filtered = [];
      if (this._router.url in urlLookup) {
        var lookup = urlLookup[this._router.url]
          var filtered = []
          data.forEach(element => {
            if ("topic" in element) {
              if (element["topic"].toLowerCase() == lookup) {
                filtered.push(element)
              }
            }
          });
          this.posts = filtered      
      } else {
        this.posts = data
      }
    });
    // this._http.getAll().subscribe((data:any[])=>this.posts = data);
  
  }
  // getAll()
  // {
  //   this._http.getAll().subscribe((data:any[])=>this.posts = data);
  // }
  
 



  
}
