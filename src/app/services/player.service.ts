import { Injectable } from '@angular/core';
import { PLAYERS } from '../data/players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  getall(){
    return PLAYERS;
  }
}
