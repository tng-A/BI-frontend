import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_FAILURE
    
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
  