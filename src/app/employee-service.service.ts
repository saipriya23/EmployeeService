import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './Employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }
  configurl="https://localhost:44324/api/GetEmployees"
  getemployees():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this.configurl);
  }
  getemployee():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>("https://localhost:44388/api/GetEmployee");
  }
}
