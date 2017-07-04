import {
    ADD_PRODUCT,
    GET_PRODUCTS
} from '../actions';
import Product from '../shared/product.model';

const initialState: Product[] = [
    {
        name: 'A'
    },
    {
        name: 'B'
    }
];
export const products = (state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT:
            return [
                ...state,
                Object.assign({}, {id: action.payload.id, name: action.payload.name})
            ]
    }
    return state;
}