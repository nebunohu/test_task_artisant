import { TProductsActions } from './../redux/actions/products-actions';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { store } from '../index';

export type TRootState = ReturnType<typeof store.getState>;

export type TApplicationActions = TProductsActions; 

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, TRootState, TApplicationActions>
>;

export type AppDispatch = typeof store.dispatch;
