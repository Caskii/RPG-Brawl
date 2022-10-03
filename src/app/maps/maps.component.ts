import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { Map } from "../models/map";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  maps:{[uid: string]: Map};

  constructor(private mapService:MapService) {
    this.maps = this.mapService.getall();
   }

  ngOnInit(): void {
    
  }

}
