import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import { AppState } from '../types';
import createRootReducer from './reducers/index'

const initState: AppState = {
    product: {
        displayProduct: [],
    }
}

const middleware = [thunk];
console.log(initState.product.displayProduct, 'from store')
const store = createStore(createRootReducer, initState, compose(applyMiddleware(...middleware)));

export default store;