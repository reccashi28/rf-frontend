import { GET_PRODUCT_SUCCESS, ProductActions, ProductState } from '../../types'

const initialState: ProductState = { displayProduct: [], }

const product = ( state = initialState, action: ProductActions ): ProductState => {
    console.log("is it running?")
    console.log(action.payload, "still reducer")
    switch(action.type) {
        case GET_PRODUCT_SUCCESS: {
            console.log(action.payload.data, "from the reducer")
            return {...state, displayProduct: action.payload.data}
        }

        default: {

            return state;
        }
    }
    
}

export default product;