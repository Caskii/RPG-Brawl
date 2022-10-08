import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { BracketService } from '../services/bracket.service';

@Component({
  selector: 'app-final-bracket',
  templateUrl: './final-bracket.component.html',
  styleUrls: ['./final-bracket.component.css']
})
export class FinalBracketComponent implements OnInit {

  bracket$:Observable<any> | undefined;

  constructor(private bracketService:BracketService) { }

  ngOnInit(): void {
    this.bracket$=this.bracketService.get();
  }
}
