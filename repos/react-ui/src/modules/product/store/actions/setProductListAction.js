// @flow
import { dispatchAction } from 'ReduxStore/utils/getAction';
import { SET_PRODUCT_LIST } from 'ReduxStore/product/actionTypes';

/**
 * @summary Dispatches product list to reducer
 * @param productList whole product list as array
 * @return dispatched product list
 * * */
export const setProductListAction = (productList: []) => {
  return async (dispatch) => {
    return dispatchAction(dispatch)(SET_PRODUCT_LIST, productList);
  };
};
