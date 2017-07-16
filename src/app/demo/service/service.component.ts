import { Component, OnInit } from '@angular/core';
import {ServerService} from './server.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private service: ServerService) { }

  ngOnInit() {
    this.service.getServers([]).subscribe((res) => {
      console.log(res);
    });
  }

}
