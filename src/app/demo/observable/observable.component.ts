import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {
  customSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.error('this doesnot work');
      }, 4000);
    });

    this.customSubscription = myObservable.subscribe((data: string) => {
      console.log(data);
    }, (err: string) => {
      console.log('error is ' + err);
    })
  }

  ngOnDestroy(){
      this.customSubscription.unsubscribe();
  }

}
