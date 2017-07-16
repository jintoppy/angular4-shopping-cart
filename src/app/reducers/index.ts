import { combineReducers } from '@ngrx/store';
import {products} from './product.reducer';
import Product from '../shared/product.model';

const reducers = combineReducers({
    products
})

export function reducer(state, action){
    return reducers(state, action);
}
