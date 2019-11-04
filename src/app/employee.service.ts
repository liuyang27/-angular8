import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import 'rxjs/operators';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string="/assets/data/employees.json";
  constructor(private http: HttpClient) { }

  getEmployees():Observable<IEmployee[]>{
    //return this.http.get<IEmployee[]>(this._url);
    return this.http.get<IEmployee[]>(this._url).pipe(catchError((e: any) =>{
      return throwError(e.message)}));
  }
  myerrorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message || "Server Error!");
  }
}
