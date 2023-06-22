import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { University } from '../university';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private baseUrl = "http://localhost:8080/api/v1/Universities";
  private getuniversities = "http://localhost:8080/api/v1/getUniversities";
  constructor(private httpClient: HttpClient) { }
  getUniversityList(): Observable<University[]>{
    return this.httpClient.get<University[]>(this.baseUrl);
    
  }
  getUniversityByname(university:University): Observable<University[]>{
    let params = new HttpParams();
    params = params.append('uname', university.universityName);
    params = params.append('cname', university.courses);
    params = params.append('department', university.departments);
    return this.httpClient.get<University[]>(this.getuniversities,{params:params});
    
  }
}
