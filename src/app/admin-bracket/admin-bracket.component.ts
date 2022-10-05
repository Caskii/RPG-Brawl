import { Component, OnInit } from '@angular/core';
import { BracketService } from '../services/bracket.service';

@Component({
  selector: 'app-admin-bracket',
  templateUrl: './admin-bracket.component.html',
  styleUrls: ['./admin-bracket.component.css']
})
export class AdminBracketComponent implements OnInit {

  constructor(private bracketService:BracketService) { }

  ngOnInit(): void {
  }

  update() {
    this.bracketService.update("a").subscribe();
  }

}
