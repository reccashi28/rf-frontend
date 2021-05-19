import { combineReducers } from 'redux'

import product from './productReducer'

const createRootReducer = () =>
combineReducers( {
    product,
})

export default createRootReducer;