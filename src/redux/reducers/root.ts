import { 
  GET_PRODUCTS_REQUEST, 
  GET_PRODUCTS_REQUEST_SUCCESS, 
  GET_PRODUCTS_REQUEST_FAILED, 
  SAVE_FILTERED_PRODUCTS } from './../actions/products-actions';
import { TProductsActions } from '../actions/products-actions';
import { combineReducers } from "redux";

export type TProductsState = {
  products: Array<any>;
  filteredProducts: Array<any>;

  getProdactsRequest: boolean;
  getProdactsRequestSuccess: boolean;
  getProdactsRequestFailed: boolean;
};

const productsInitialState: TProductsState = {
  products: [],
  filteredProducts: [],

  getProdactsRequest: false,
  getProdactsRequestSuccess: false,
  getProdactsRequestFailed: false,
};

export const productsReducer = (state = productsInitialState, action: TProductsActions): TProductsState => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        getProdactsRequest: true,
        getProdactsRequestSuccess: false,
        getProdactsRequestFailed: false,
      }
    }
    case GET_PRODUCTS_REQUEST_SUCCESS: {
      return {
        ...state,
        getProdactsRequest: false,
        getProdactsRequestSuccess: true,
        products: action.products,
        filteredProducts: action.products,
      }
    }
    case GET_PRODUCTS_REQUEST_FAILED: {
      return {
        ...state,
        getProdactsRequest: false,
        getProdactsRequestFailed: true,
      }
    }
    case SAVE_FILTERED_PRODUCTS: {
      return {
        ...state,
        filteredProducts: action.products
      }
    }
    
    default: return state;
  }
};

export const rootReducer = combineReducers({
  productsState: productsReducer
});