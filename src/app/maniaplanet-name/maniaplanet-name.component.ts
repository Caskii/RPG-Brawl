import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'maniaplanet-name[name]',
  templateUrl: './maniaplanet-name.component.html',
  styleUrls: ['./maniaplanet-name.component.css']
})
export class ManiaplanetNameComponent implements OnInit {
  @Input('name') name!:string;

  maniaName:any[]= [];

  constructor() { }

  ngOnInit(): void {
    let parser = new TMFColorParser();
    this.maniaName=parser.toHTML(this.name);
  } 
}