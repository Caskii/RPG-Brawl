import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BracketService {
  
  /*url:string = 'https://rpg-brawl-api.herokuapp.com/brackets/update/brawl-2022';*/
  url:string = 'http://localhost:3000/brackets/update/brawl-2022';

  constructor(private http:HttpClient,private authService:AuthService) { }

  getall(){
    return  this.http.get(this.url);
  }
  update(bracket:string){
      let token =  this.authService.getToken();
      var headers_object = new HttpHeaders().set("Authorization", "JWT " + token);
      return this.http.put(this.url,{ "bracket" : bracket },  { headers: headers_object });
  }

}