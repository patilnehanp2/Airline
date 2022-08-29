import { HttpClient, HttpHeaders,HttpErrorResponse,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Usersignup } from './usersignup';

@Injectable({
  providedIn: 'root'
})
export class UsersignupService {

    httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };


  url:string="http://localhost:60512/api"

  constructor(private http: HttpClient) { }

  RegisterUser(customer:Usersignup):Observable<any>
  {

    return this.http.post<any>(this.url+'/Customer/UserReg',customer,this.httpOptions)
  }

}
