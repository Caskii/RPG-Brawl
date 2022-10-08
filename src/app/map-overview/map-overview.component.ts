import { Component, Input, OnInit } from '@angular/core';
import { Map } from "../models/map";

@Component({
  selector: 'map-overview',
  templateUrl: './map-overview.component.html',
  styleUrls: ['./map-overview.component.css']
})
export class MapOverviewComponent implements OnInit {
  @Input('map') map!:Map;
  @Input('map-id') mapId!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
