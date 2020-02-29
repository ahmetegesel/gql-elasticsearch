import DataLoader from "dataloader";

import { products } from "../schema/_mockData";

const batchProductSuggestions = async (categoryIds) => {
  return categoryIds.map(categoryId => products.filter(product => product.category.id === categoryId))
}

export const suggestionsLoader = new DataLoader(batchProductSuggestions);

const batchProducts = async (ids) => {
  return ids.map(id => products.filter(product => product.id === id));
}

export const productsLoader = new DataLoader(batchProducts);
