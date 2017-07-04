import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DemoServiceService {
  
  somethingUpdated: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  logSomething(){
    console.log('hello');
  }

}
