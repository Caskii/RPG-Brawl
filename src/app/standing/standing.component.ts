import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from '../services/leaderboard.service';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.css']
})
export class StandingComponent implements OnInit {

  constructor(private leaderboardService:LeaderboardService) { }

  ngOnInit(): void {
  }

}
