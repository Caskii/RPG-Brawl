import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  url:string = 'http://localhost:3000/servers';

  constructor(private http:HttpClient) { }
  getall(){
    return  this.http.get<any>(this.url);
  }
  get(serverId:string){
    console.log(this.url+serverId);
    return  this.http.get<any>(this.url+'/'+serverId);
  }
 
}
