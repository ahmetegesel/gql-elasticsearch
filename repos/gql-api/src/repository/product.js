import { elasticGet, elasticSearch } from '../../lib/db/elasticsearch';
import { transformToDotted, transformArrayToDoted } from '../../lib/object';

const productRepository = {
  async findById(id) {
    const result = await elasticGet({
      index: 'products_1',
      id,
    });

    return transformToDotted(result);
  },
  async findAll() {
    const result = await elasticSearch({
      index: 'products_1',
      body: {
        query: {
          term: {
            type: 'product',
          },
        },
        _source: {
          excludes: ['type'],
        },
      },
    });

    return transformArrayToDoted(result);
  },
  async findSuggestions(category) {
    const result = await elasticSearch({
      index: 'products_1',
      body: {
        query: {
          term: {
            category_id: category,
          },
        },
        _source: {
          excludes: ['type'],
        },
      },
    });

    return transformArrayToDoted(result);
  },
};

export default productRepository;
