import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl = "http://localhost:8080/api/v1/addUser";
  private getUrl = "http://localhost:8080/api/v1/user";
  constructor(private httpClient:HttpClient) { }
  addUser(user: User) : Observable<object>{
   return this.httpClient.post(this.baseUrl,user);
  }
  checkUser(username: string, userpass: string):Observable<String> {
    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('password', userpass);
    return this.httpClient.get<string>(this.getUrl,{params:params});
  }

}
