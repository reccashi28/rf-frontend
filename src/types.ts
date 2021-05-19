export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'

export type Product = {
    name: string
    description: string
    categories: string[]
    variants: string[]
    sizes: string[]
    price: number
    quantity: number
  }

export type GetProductSuccessAction = {
    type: typeof GET_PRODUCT_SUCCESS
    payload: {
        data: Product[]
    }
}

export type ProductState = {
    displayProduct: Product[]
}

export type ProductActions = GetProductSuccessAction;

export type AppState = {
    product: ProductState   
}