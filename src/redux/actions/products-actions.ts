import { AppDispatch, AppThunk } from "../../types";
import { productsRequest } from "../../utils/get-products";

export const GET_PRODUCTS_REQUEST: "GET_PRODUCTS_REQUEST" = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_REQUEST_SUCCESS: "GET_PRODUCTS_REQUEST_SUCCESS" = "GET_PRODUCTS_REQUEST_SUCCESS";
export const GET_PRODUCTS_REQUEST_FAILED: "GET_PRODUCTS_REQUEST_FAILED" = "GET_PRODUCTS_REQUEST_FAILED";
export const SAVE_FILTERED_PRODUCTS: "SAVE_FILTERED_PRODUCTS" = "SAVE_FILTERED_PRODUCTS";

export type TGetProductsRequest = {
  type: typeof GET_PRODUCTS_REQUEST;
}

export type TGetProductsRequestSuccess = {
  type: typeof GET_PRODUCTS_REQUEST_SUCCESS;
  products: Array<any>
}

export type TGetProductsRequestFailed = {
  type: typeof GET_PRODUCTS_REQUEST_FAILED;
}

export type TSaveFilteredProducts = {
  type: typeof SAVE_FILTERED_PRODUCTS;
  products: Array<any>;
}

export const getProductsRequest = (): TGetProductsRequest => {
  return {
    type: GET_PRODUCTS_REQUEST
  }
}

export const getProductsRequestSuccess = (products: Array<any>): TGetProductsRequestSuccess => {
  return {
    type: GET_PRODUCTS_REQUEST_SUCCESS,
    products
  }
}

export const getProductsRequestFailed = (): TGetProductsRequestFailed => {
  return {
    type: GET_PRODUCTS_REQUEST_FAILED
  }
}

export const saveFilteredProducts = (products: Array<any>) => {
  return {
    type: SAVE_FILTERED_PRODUCTS,
    products
  }
}


export type TProductsActions = TGetProductsRequest | 
  TGetProductsRequestSuccess | 
  TGetProductsRequestFailed |
  TSaveFilteredProducts; 

export const getProducts: AppThunk = () => async (dispatch: AppDispatch) => {
  dispatch(getProductsRequest());
  try {
    const products = await productsRequest();
    //dispatch(saveProducts(products));
    dispatch(getProductsRequestSuccess(products));
  } catch (error) {
    console.log(error);
    dispatch(getProductsRequestFailed());
  }

}