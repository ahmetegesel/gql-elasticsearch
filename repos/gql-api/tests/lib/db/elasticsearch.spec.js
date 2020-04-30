import elasticsearch from 'elasticsearch';
import {
  createClient,
  defaultClientOptions,
  elasticGet,
  transformGetResponse,
} from '../../../lib/db/elasticsearch';

jest.mock('elasticsearch');

describe('Elasticsearch client functions tests', () => {
  test('createClient should an instance of Client with given options', () => {
    elasticsearch.Client = jest.fn().mockImplementationOnce((options) => ({ options }));

    const options = {};
    const result = createClient(options);

    expect(result.options).toEqual(options);
  });

  test('createClient should use defaultClientOptions when options parameter is not given', () => {
    elasticsearch.Client = jest.fn().mockImplementationOnce((options) => ({ options }));

    const options = defaultClientOptions;
    const result = createClient();

    expect(result.options).toEqual(options);
  });

  test('transformGetResponse should return expected data result transforming the given response object', () => {
    const id = 'testId';
    const source = {
      testField: 'testField',
    };
    const response = {
      _id: id,
      _source: source,
    };

    const result = transformGetResponse(response);

    expect(result.id).toBe(id);
    expect(result.testField).toBe(source.testField);
  });

  test('elasticGet should return result by invoking the get function of the given client with given parameters.', async () => {
    const params = {
      index: 'someIndex',
      id: 'someId',
    };

    const mockData = {
      _id: params.id,
      _source: {
        someField: 'someField',
      },
    };

    const client = {
      get: jest.fn().mockReturnValue(mockData),
    };

    const result = await elasticGet(params, client);

    expect(client.get).toHaveBeenNthCalledWith(1, params);
    expect(result.id).toEqual(mockData._id);
    expect(result.someField).toEqual(mockData._source.someField);
  });
});
