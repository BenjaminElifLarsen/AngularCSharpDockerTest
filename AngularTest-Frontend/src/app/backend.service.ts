import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'text/plain; charset=utf-8' })
  };
  constructor(private http: HttpClient) { }

  public test(){
    return this.http.get("https://localhost:7057/", {
      responseType: 'text'
});
  }
}
