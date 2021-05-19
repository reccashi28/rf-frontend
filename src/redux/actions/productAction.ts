import { Dispatch } from 'redux'

import { GET_PRODUCT_SUCCESS, Product, ProductActions } from '../../types'

export const fetchProducts = () => {
    return async (dispatch: Dispatch) => {
       const response = await fetch('/products');
       const data = await response.json()
       console.log(data, 'from action')
       dispatch(getProductSuccess(data))
    }
}

export const getProductSuccess = (data: Product[]): ProductActions => {
    console.log(data, "get data success");
    return {
        type: GET_PRODUCT_SUCCESS,
        payload: {
            data,
        },
    }
}

