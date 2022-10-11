import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signInUrl:string = 'https://rpg-brawl-api.herokuapp.com/auth/sign_in';

  constructor(private http:HttpClient) { }

  login(username:string, password:string) {
    return this.http.post<any>(this.signInUrl, { "fullName" : username, "password" : password })
    .pipe(map(response =>this.saveToken(response.token)));
  }
  logout(){
    localStorage.removeItem('token');
  }

  isLoggedIn(){
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('token');
    if(!token)
        return false;
    let isExpired =  jwtHelper.isTokenExpired(token);
    return !isExpired;
  }
  getToken(){
    if(this.isLoggedIn()) return localStorage.getItem('token');
    return null;
  }
  private saveToken(token:string){
    localStorage.setItem('token', token);
    return true;
  }
}
