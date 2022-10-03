import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Map } from '../models/map';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-map-details',
  templateUrl: './map-details.component.html',
  styleUrls: ['./map-details.component.css']
})
export class MapDetailsComponent implements OnInit {

  map: Partial<Map>|null = {};
  constructor(private mapService:MapService,private route:ActivatedRoute) { 
    this.route.paramMap.subscribe(params=> {
      let uid = params.get('id');
      this.map = this.mapService.get(uid);
    });
  }

  ngOnInit(): void {
   
  }

}
