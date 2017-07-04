import { combineReducers } from '@ngrx/store';
import {products} from './product.reducer';
import Product from '../shared/product.model';
export const reducer = combineReducers({
    products
})
