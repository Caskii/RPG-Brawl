import { Injectable } from '@angular/core';
import { MAPS } from '../data/maps';
@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  getall(){
    return MAPS;
  }
  get(uid:string|null){
    return (uid)?  MAPS[uid] :  null;
  }
}
