import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signInUrl:string = 'https://rpg-brawl-api.herokuapp.com/auth/sign_in';

  constructor(private http:HttpClient) { }
  
  //TODO
  login(username:string, password:string) {
    //return this.http.post(this.signInUrl, { username, password });
  }

  isLoggedIn(){
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('brawl-token');
    if(!token)
        return false;
    let isExpired =  jwtHelper.isTokenExpired(token);
    return !isExpired;
}
}
