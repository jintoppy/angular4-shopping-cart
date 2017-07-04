import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() title: string;
  @Output() onInsideClick: EventEmitter<Object> = new EventEmitter<Object>();
  constructor() { }

  ngOnInit() {
  }

  onBtnClick(){
    this.onInsideClick.emit({
      hi: "hello"
    });
  }

}
