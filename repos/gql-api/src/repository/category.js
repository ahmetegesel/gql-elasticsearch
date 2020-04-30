import { elasticGet, elasticSearch } from '../../lib/db/elasticsearch';
import { transformToDotted, transformArrayToDoted } from '../../lib/object';

const categoryRepository = {
  async findById(id) {
    const result = await elasticGet({
      index: 'products_1',
      id,
    });

    return transformToDotted(result);
  },
  async findAll() {
    const result = elasticSearch({
      index: 'products_1',
      body: {
        query: {
          term: {
            type: 'category',
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

export default categoryRepository;
