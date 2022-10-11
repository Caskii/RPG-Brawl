import { Component, Input, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { Map } from "../models/map";

@Component({
  selector: 'app-map-in-card',
  templateUrl: './map-in-card.component.html',
  styleUrls: ['./map-in-card.component.css']
})
export class MapInCardComponent implements OnInit {
  @Input('mapId') MapId!:string;

  maps:{[uid: string]: Map};
  constructor(private mapService:MapService) { 
    this.maps = this.mapService.getall();
  }

  ngOnInit(): void {
  }

}
