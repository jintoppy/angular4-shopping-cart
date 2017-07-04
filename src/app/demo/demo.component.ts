import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from './demo-service.service'

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  activeView: string = 'Component';
  constructor(private demoService: DemoServiceService) { }

  ngOnInit() {
    this.demoService.logSomething();

    this.demoService.somethingUpdated.subscribe((msg) => console.log(msg));
  }

  setView(view){
    this.activeView =  view;
    this.demoService.somethingUpdated.emit("set view " + view);
  }

}
