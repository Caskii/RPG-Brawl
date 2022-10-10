import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BracketService } from '../services/bracket.service';

@Component({
  selector: 'app-bracket-page',
  templateUrl: './bracket-page.component.html',
  styleUrls: ['./bracket-page.component.css']
})
export class BracketPageComponent implements OnInit {
  bracket$:Observable<any> | undefined;

  constructor(private bracketService:BracketService) { 
    this.bracket$=this.bracketService.get();
  }

  ngOnInit(): void {
  }

}
