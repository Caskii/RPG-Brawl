import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BracketService {
  
  getUrl:string = 'https://rpg-brawl-api.herokuapp.com/brackets/brawl-2022';
  updateUrl:string = 'https://rpg-brawl-api.herokuapp.com/brackets/update/brawl-2022';

  constructor(private http:HttpClient,private authService:AuthService) { }

  get(){
    return this.http.get(this.getUrl);
  }
  update(bracket:string){
      let token =  this.authService.getToken();
      var headers_object = new HttpHeaders().set("Authorization", "JWT " + token);
      return this.http.put(this.updateUrl,{ "bracket" : bracket },  { headers: headers_object });
  }

}