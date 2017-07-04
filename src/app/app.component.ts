import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ADD_PRODUCT} from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  sub: Subscription;
  products;

  constructor(private store: Store<Object>){
    
  }
  addProduct(){
    this.store.dispatch({
      type: ADD_PRODUCT,
      payload: {id: 3, name: 'C'}
    })
  }
  ngOnInit(){
    this.products = this.store.select('products');
    this.products.subscribe(x=> console.log(x));    
  }

  ngOnDestroy(){
    this.products.unsubscribe();
  }
}
