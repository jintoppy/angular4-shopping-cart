import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('myAnimation', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1) translateY(40px)'
      })),
      transition('inactive => active', animate('500ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      ]))),
      transition('active => inactive', animate('300ms ease-out'))
    ])
  ]
})
export class AnimationComponent implements OnInit {
  state: string = 'inactive';
  constructor() { }

  ngOnInit() {
  }

  startAnimation(){
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }

}
