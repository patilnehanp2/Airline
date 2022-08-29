import { Observable } from 'rxjs';
import { Ilogin } from './ilogin';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { RegistrationComponent } from './registration/registration.component';
import { Usersignup } from './usersignup';

@Injectable({
  providedIn: 'root'
})
export class RegistService {
  url='http://localhost:60512/api'
  httpOptions = { headers:new HttpHeaders({'Content-type':'application/json'})}


  constructor(private httpclient:HttpClient) { }
  userlogin(userlogindata:Ilogin):Observable<Ilogin>{
    return this.httpclient.post<Ilogin>(this.url+'/Customer/Userlogin', userlogindata,this.httpOptions).pipe(catchError(this.handleError))
  }

handleError(error:HttpErrorResponse){
    let errormessage=''
    errormessage = error.status+'\n'+error.statusText+'\n'+error.error
    alert(errormessage)
    return throwError(errormessage)
  }
}
