import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { BracketService } from '../services/bracket.service';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-admin-bracket',
  templateUrl: './admin-bracket.component.html',
  styleUrls: ['./admin-bracket.component.css']
})
export class AdminBracketComponent implements OnInit {
  players:{[login: string]: string};
  bracket$:Observable<any> | undefined;
  bracket:any;

  //default values
  currentBracket:string="upper_bracket";
  currentMatch:string="w1_1";
  playersLogin:string[]=['-','-','-','-'];
  playersPoints:number[]=[0,0,0,0];

  constructor(
    private bracketService:BracketService,
    private authService:AuthService,
    private playerService:PlayerService,
    private router:Router,
    public fb: FormBuilder
    ) { 
      this.players=playerService.getall();
      this.bracket$=this.bracketService.get();
      this.bracket$.subscribe(data=>this.bracket=data);
    }

  ngOnInit(): void {

  }
  onMatchClicked(match:string){
    this.currentMatch=match;
    this.currentBracket=match[0]=='w'?'upper_bracket':'lower_bracket';
    for (let i = 0; i < 4; i++) {
      this.playersLogin[i]=this.bracket['bracket'][this.currentBracket]['matches'][match][i].name;
      this.playersPoints[i]=this.bracket['bracket'][this.currentBracket]['matches'][match][i].score;
    }
    let element = document.querySelector('h3');
    element?.scrollIntoView({behavior: 'smooth'});
  }
  save(){
    for (let i = 0; i < 4; i++) {
      this.bracket['bracket'][this.currentBracket]['matches'][this.currentMatch][i]={'name':this.playersLogin[i],'score':this.playersPoints[i]};
    }
    this.bracketService.update(this.bracket['bracket']).subscribe();
    this.router.navigate([this.router.url]);
  }
  logout(){
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
