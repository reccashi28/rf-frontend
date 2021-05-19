import React, { useEffect } from 'react'
import { useDispatch,  } from 'react-redux';
import { fetchProducts } from '../redux/actions/productAction'
// import { AppState } from '../types';

function AllProducts() {
    const dispatch = useDispatch();
    // const { displayProduct } = useSelector( (state: AppState ) => state.product);
// console.log(displayProduct)
    useEffect( () => {
        console.log('useeffect running')
        dispatch(fetchProducts())
    }, [dispatch])
    return (
        <div>
            hello
        </div>
    )
}

export default AllProducts
