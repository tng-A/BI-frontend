import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_FAILURE, 
    GET_FILTERED_PRODUCT, 
    GET_FILTERED_PRODUCT_SUCCESS, 
    GET_FILTERED_PRODUCT_FAILURE, 
    CREATE_PRODUCT_TARGET, 
    CREATE_PRODUCT_TARGET_FAILURE, 
    CREATE_PRODUCT_TARGET_SUCCESS
    
  } from "../ActionTypes/Products";
  
  export const getProducts = () => {
    return {
      type: GET_PRODUCTS
    };
  };
  
  export const getProductSuccess = payload => ({
    type: GET_PRODUCTS_SUCCESS,
    payload
  });
  
  export const getProductsfailure = error => ({
    type: GET_PRODUCTS_FAILURE,
    error
  });

  export const getFilteredProducts = (periodType, year) => ({
    type: GET_FILTERED_PRODUCT,
    periodType,
    year
  });
  
  export const getFilteredProductsStreamSuccess = product => ({
    type: GET_FILTERED_PRODUCT_SUCCESS,
    product
  });
  
  export const getFilteredProductsStreamFailure = error => ({
    type: GET_FILTERED_PRODUCT_FAILURE,
    error
  });
  
  export const createProductsTarget = payload => ({
    type: CREATE_PRODUCT_TARGET,
    payload
  });
  
  export const createProductsTargetSuccess = payload => ({
    type: CREATE_PRODUCT_TARGET_SUCCESS,
    payload
  });
  
  export const createProductsTargetFailure = error => ({
    type: CREATE_PRODUCT_TARGET_FAILURE,
    error
  });