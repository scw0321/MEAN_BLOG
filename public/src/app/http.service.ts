import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'

})

export class HttpService {
  constructor(private _http: HttpClient) { }
  //Create


  // Get ALL
  getAll(){
    console.log("getting all posts - http")
    return this._http.get('/api/posts');

  }

  //Get One


  // Update


  // Delete





}
