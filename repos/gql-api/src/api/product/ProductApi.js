import { transformSearchResponse, transformGetResponse } from "../utils";

export default class ProductApi {
  async findById(id, clients) {
    const resultResultBody = await clients.elastic.get({
      index: 'products_1',
      id: id
    });

    return transformGetResponse(resultResultBody);
  }

  async findSuggestions(category, clients) {
    const resultResultBody = await clients.elastic.search({
      index: 'products_1',
      body: {
        query: {
          term: {
            category_id: category
          }
        },
        _source: {
          excludes: ['type']
        }
      }
    });

    return transformSearchResponse(resultResultBody);
  }

  async findAll(clients) {
    const resultResultBody = await clients.elastic.search({
      index: 'products_1',
      body: {
        query: {
          term: {
            type: 'product'
          }
        },
        _source: {
          excludes: ['type']
        }
      }
    });

    return transformSearchResponse(resultResultBody);
  }
}
