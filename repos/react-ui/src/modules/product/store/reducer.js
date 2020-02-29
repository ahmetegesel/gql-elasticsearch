import { generateUpdateStateHandler, generateReducer } from 'lib/reducerUtils';
import { stateKeys, defaultState } from 'modules/product/store/defaultState';
import { SET_PRODUCT_LIST, SET_CATEGORY_LIST, SET_SELECTED_CATEGORY } from './actionTypes';

const handlers = {};
handlers[SET_PRODUCT_LIST] = generateUpdateStateHandler(stateKeys.productList);
handlers[SET_CATEGORY_LIST] = generateUpdateStateHandler(stateKeys.categoryList);
handlers[SET_SELECTED_CATEGORY] = generateUpdateStateHandler(stateKeys.selectedCategory);

export default generateReducer(defaultState, handlers);
