import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers$:Observable<any> | undefined;

  constructor(private serverService:ServerService ) { }

  ngOnInit(): void {
    this.servers$=this.serverService.getall();
  }

}
