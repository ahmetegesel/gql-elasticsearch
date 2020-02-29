// @flow
import { dispatchAction } from 'lib/actionUtils';
import { SET_PRODUCT_LIST } from 'modules/product/store/actionTypes';

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
