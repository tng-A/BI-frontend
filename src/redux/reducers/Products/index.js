import {GET_PRODUCTS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS} from '../../ActionTypes/Products'

const initialState = {
    products:[],
    loading: false,

}

const productsReducer = (state = initialState, action={}) => {
    switch(action.type){
        case GET_PRODUCTS:
            return { ...state, errors: '', loading: true };
        case GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload.data, loading: false };
        case GET_PRODUCTS_FAILURE: 
            return { ...state, valueCenters: [], loading: false };
        default:
            return state
    }
}

export default productsReducer; 
