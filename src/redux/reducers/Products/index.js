import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
  GET_FILTERED_PRODUCT,
  GET_FILTERED_PRODUCT_FAILURE,
  GET_FILTERED_PRODUCT_SUCCESS,
  CREATE_PRODUCT_TARGET,
  CREATE_PRODUCT_TARGET_SUCCESS,
  CREATE_PRODUCT_TARGET_FAILURE
} from '../../ActionTypes/Products';

const initialState = {
  products: [],
  loading: false,
  disabled: true,
  isSaving: false,
  modal: false,
  periods: [],
  metrics: [],
  errors: {},
  productTarget: {}
};

const productsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, errors: '', loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload.data, loading: false };
    case GET_PRODUCTS_FAILURE:
      return { ...state, valueCenters: [], loading: false };
    case GET_FILTERED_PRODUCT:
      return { ...state, loading: true };
    case GET_FILTERED_PRODUCT_SUCCESS:
      return { ...state, products: action.product, loading: false };
    case GET_FILTERED_PRODUCT_FAILURE:
      return { ...state, products: [], loading: false, errors: action.payload };
    case CREATE_PRODUCT_TARGET:
      return {
        ...state,
        loading: true
      };
    case CREATE_PRODUCT_TARGET_SUCCESS:
      return { ...state,
        productTarget: action.payload.data,
        loading: false };
    case CREATE_PRODUCT_TARGET_FAILURE:
      return { ...state, errors: action.errors, loading: false };
    default:
      return state;
  }
};

export default productsReducer;
