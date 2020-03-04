
import { transformGetResponse, transformSearchResponse } from "./utils";

export default class CategoryApi {
  async findById(id, clients) {
    const resultResultBody = await clients.elastic.get({
      index: 'products_1',
      id: id
    });

    return transformGetResponse(resultResultBody);
  }

  async findAll(clients) {
    const resultResultBody = await clients.elastic.search({
      index: 'products_1',
      body: {
        query: {
          term: {
            type: 'category'
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
