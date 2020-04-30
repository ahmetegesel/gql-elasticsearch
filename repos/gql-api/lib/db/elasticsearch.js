import memoize from 'lodash.memoize';
import { Client } from 'elasticsearch'; //eslint-disable-line

export const defaultClientOptions = {
  node: process.env.ELASTIC_NODE,
};

export const createClient = memoize((options = defaultClientOptions) => {
  return new Client(options);
});

export const transformGetResponse = (response) => {
  return {
    id: response._id,
    ...response._source,
  };
};

export const transformSearchResponse = (response) => {
  return response.hits.hits.map((hit) => ({
    id: hit._id,
    ...hit._source,
  }));
};

export const elasticGet = async (params, client = createClient()) => {
  const response = await client.get(params);

  return transformGetResponse(response);
};

export const elasticSearch = async (params, client = createClient()) => {
  const response = await client.search(params);

  return transformSearchResponse(response);
};
