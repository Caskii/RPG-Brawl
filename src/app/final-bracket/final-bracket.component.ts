import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'final-bracket',
  templateUrl: './final-bracket.component.html',
  styleUrls: ['./final-bracket.component.css']
})
export class FinalBracketComponent implements OnInit {
  @Input('bracket$') bracket$!:Observable<any> | undefined;;
  @Output() matchClicked =  new EventEmitter();

  players:{[login: string]: string};

  constructor(playerService:PlayerService) { 
    this.players=playerService.getall();
  }

  ngOnInit(): void {
  }
  onMatchClick(matchName:string){
    this.matchClicked.emit(matchName)
  }

}
