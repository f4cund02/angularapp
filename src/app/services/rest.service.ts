import { Injectable } from '@angular/core';
import { Model } from '../model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestService {
 // Define API
  apiURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

    // Http Options
    // httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // }  


    getRest() {
      return this.http.get<Model[]>(this.apiURL + '/posts');
      
    }

  

}
