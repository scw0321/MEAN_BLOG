import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll()
  {
  	return this._http.get("/api/posts");
  }

  destroy(id)
  {
  	return this._http.delete("/api/posts/"+id);
  }

  create(data)
  {
  	return this._http.post("/api/posts/new", data);
  }

  getOne(id)
  {
  	return this._http.get("/api/posts/"+id);
  }

  update(id, data)
  {
  	return this._http.patch("/api/posts/edit/"+id, data)
  }

  addAnswer(id, data)
  {
    // return this._http.put("/api/posts/"+id+"/answer/", data);
    return this._http.put("/api/posts/"+id, data);
  }
  
  
}
