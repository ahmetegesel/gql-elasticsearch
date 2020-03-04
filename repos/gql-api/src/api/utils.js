import DotObject from 'dot-object';

const dotObject = new DotObject('_')

export function transformSearchResponse(response) {
  return response.body.hits.hits.map(hit => (dotObject.object({
    id: hit._id,
    ...hit._source
  })));
}

export function transformGetResponse(response) {
  return dotObject.object(response.body._source);
}
